import { site, withBase } from '../config/site';

const STEP_TITLES: Record<number, string> = {
  1: 'What do you need help with?',
  2: 'Shipment details',
  3: 'Route and timing',
  4: 'Support needed',
  5: 'Contact details',
};
const STEP_COUNT = 5;
const STORAGE_KEY = 'cargoadvisor-enquiry-v1';
const MAX_FILES = 8;

const HELP_LABELS: Record<string, string> = {
  'special-cargo': 'Special cargo',
  exhibition: 'Exhibition / event cargo',
  oversized: 'Oversized shipment',
  fragile: 'Fragile equipment',
  'customs-permit': 'Customs / permit help',
  'not-sure': 'Not sure',
};

const FIELD_LABELS: [string, string][] = [
  ['helpType', 'Help needed'],
  ['shipmentDescription', 'Shipment'],
  ['commercialValue', 'Commercial value (SGD)'],
  ['pieceCount', 'Pieces'],
  ['approxWeight', 'Weight'],
  ['dimensions', 'Dimensions'],
  ['origin', 'Origin'],
  ['destination', 'Destination'],
  ['deliveryLocationType', 'Delivery location type'],
  ['deadline', 'Deadline / event date'],
  ['timingFixed', 'Timing fixed'],
  ['needCustoms', 'Customs / permit support'],
  ['customsNotes', 'Customs notes'],
  ['needVenueDelivery', 'Venue delivery'],
  ['venueDetails', 'Venue details'],
  ['needPacking', 'Packing / repacking'],
  ['needStorage', 'Temporary storage'],
  ['storageDuration', 'Storage duration'],
  ['needReturn', 'Return shipment'],
  ['returnDate', 'Return date'],
  ['needSetupTeardown', 'Setup / teardown support'],
  ['fullName', 'Name'],
  ['company', 'Company'],
  ['mobile', 'Mobile / WhatsApp'],
  ['email', 'Email'],
  ['preferredContact', 'Preferred contact'],
  ['notes', 'Notes'],
];

const CHECKBOX_FIELDS = new Set([
  'needCustoms',
  'needVenueDelivery',
  'needPacking',
  'needStorage',
  'needReturn',
  'needSetupTeardown',
]);

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function trimFileList(files: FileList, max: number): FileList {
  const dt = new DataTransfer();
  Array.from(files)
    .slice(0, max)
    .forEach((f) => dt.items.add(f));
  return dt.files;
}

function isFieldValid(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): boolean {
  const value = field.value.trim();
  if (!value) return false;
  if (field instanceof HTMLInputElement && field.type === 'email') {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
  if (field instanceof HTMLInputElement && field.type === 'number') {
    return Number(value) > 0;
  }
  return true;
}

function setFieldValidity(field: HTMLElement, id: string, valid: boolean) {
  field.setAttribute('aria-invalid', valid ? 'false' : 'true');
  document.getElementById(`${id}-error`)?.classList.toggle('is-visible', !valid);
}

function initEnquiryFlow(form: HTMLFormElement) {
  let currentStep = 1;

  const steps = Array.from(form.querySelectorAll<HTMLElement>('.enquiry__step'));
  const progressFill = document.getElementById('enquiry-progress-fill');
  const progressText = document.getElementById('enquiry-progress-text');
  const progressWrap = document.getElementById('enquiry-progress');
  const backBtn = document.getElementById('enquiry-back-btn') as HTMLButtonElement | null;
  const continueBtn = document.getElementById('enquiry-continue-btn') as HTMLButtonElement | null;
  const stickyContinueBtn = document.getElementById('enquiry-sticky-continue-btn') as HTMLButtonElement | null;
  const stickyCta = document.getElementById('enquiry-sticky-cta');
  const errorBanner = document.getElementById('enquiry-error-banner');
  const formPanel = document.getElementById('enquiry-form-panel');
  const confirmation = document.getElementById('enquiry-confirmation');

  if (!backBtn || !continueBtn) return;

  function updateProgress() {
    if (progressFill) progressFill.style.width = `${(currentStep / STEP_COUNT) * 100}%`;
    const label = `Step ${currentStep} of ${STEP_COUNT}: ${STEP_TITLES[currentStep]}`;
    if (progressText) progressText.textContent = label;
  }

  function setNavLabels() {
    const label = currentStep === STEP_COUNT ? 'Submit enquiry' : 'Continue';
    if (continueBtn) continueBtn.textContent = label;
    if (stickyContinueBtn) stickyContinueBtn.textContent = label;
    if (backBtn) backBtn.hidden = currentStep === 1;
  }

  function goToStep(n: number, options: { focus?: boolean; scroll?: boolean } = {}) {
    const { focus = true, scroll = true } = options;
    if (n < 1 || n > STEP_COUNT) return;
    steps[currentStep - 1].hidden = true;
    currentStep = n;
    const stepEl = steps[currentStep - 1];
    stepEl.hidden = false;
    updateProgress();
    setNavLabels();
    const heading = stepEl.querySelector<HTMLElement>('h2');
    if (focus) heading?.focus();
    if (scroll) {
      stepEl.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
    }
    saveState();
  }

  function validateStep(stepEl: HTMLElement): { valid: boolean; firstInvalid: HTMLElement | null } {
    let valid = true;
    let firstInvalid: HTMLElement | null = null;

    const fields = stepEl.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
      'input[required]:not([type=radio]):not([type=checkbox]), textarea[required], select[required]'
    );
    fields.forEach((field) => {
      const ok = isFieldValid(field);
      setFieldValidity(field, field.id, ok);
      if (!ok) {
        valid = false;
        if (!firstInvalid) firstInvalid = field;
      }
    });

    const radioGroups = new Set<string>();
    stepEl.querySelectorAll<HTMLInputElement>('input[type=radio][required]').forEach((r) => radioGroups.add(r.name));
    radioGroups.forEach((name) => {
      const checked = stepEl.querySelector<HTMLInputElement>(`input[name="${name}"]:checked`);
      const ok = !!checked;
      document.getElementById(`${name}-error`)?.classList.toggle('is-visible', !ok);
      stepEl
        .querySelectorAll<HTMLInputElement>(`input[name="${name}"]`)
        .forEach((r) => r.setAttribute('aria-invalid', ok ? 'false' : 'true'));
      if (!ok) {
        valid = false;
        if (!firstInvalid) firstInvalid = stepEl.querySelector<HTMLInputElement>(`input[name="${name}"]`);
      }
    });

    return { valid, firstInvalid };
  }

  function wireLiveClearing() {
    const textLikeFields = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
      'input[required]:not([type=radio]):not([type=checkbox]), textarea[required], select[required]'
    );
    textLikeFields.forEach((field) => {
      const evt = field.tagName === 'SELECT' ? 'change' : 'input';
      field.addEventListener(evt, () => {
        if (field.getAttribute('aria-invalid') === 'true') {
          setFieldValidity(field, field.id, isFieldValid(field));
        }
      });
    });

    const requiredRadioNames = new Set<string>();
    form.querySelectorAll<HTMLInputElement>('input[type=radio][required]').forEach((r) => requiredRadioNames.add(r.name));
    requiredRadioNames.forEach((name) => {
      form.querySelectorAll<HTMLInputElement>(`input[name="${name}"]`).forEach((radio) => {
        radio.addEventListener('change', () => {
          document.getElementById(`${name}-error`)?.classList.remove('is-visible');
          form
            .querySelectorAll<HTMLInputElement>(`input[name="${name}"]`)
            .forEach((r) => r.setAttribute('aria-invalid', 'false'));
        });
      });
    });
  }

  function wireConditionalToggles() {
    form.querySelectorAll<HTMLInputElement>('input[type=checkbox][data-conditional-target]').forEach((toggle) => {
      const targetId = toggle.dataset.conditionalTarget;
      if (!targetId) return;
      const wrap = document.getElementById(`${targetId}-wrap`);
      const sync = () => {
        if (wrap) wrap.hidden = !toggle.checked;
      };
      toggle.addEventListener('change', sync);
      sync();
    });
  }

  function wireFileUpload() {
    const dropzone = document.getElementById('dropzone');
    const input = document.getElementById('field-attachments') as HTMLInputElement | null;
    const fileList = document.getElementById('file-list');
    if (!dropzone || !input || !fileList) return;

    const render = () => {
      fileList.innerHTML = '';
      Array.from(input.files ?? []).forEach((file, index) => {
        const li = document.createElement('li');
        const label = document.createElement('span');
        label.textContent = `${file.name} (${formatBytes(file.size)})`;
        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.textContent = '✕';
        removeBtn.setAttribute('aria-label', `Remove ${file.name}`);
        removeBtn.addEventListener('click', () => removeFile(index));
        li.append(label, removeBtn);
        fileList.appendChild(li);
      });
    };

    const removeFile = (index: number) => {
      const dt = new DataTransfer();
      Array.from(input.files ?? []).forEach((file, i) => {
        if (i !== index) dt.items.add(file);
      });
      input.files = dt.files;
      render();
    };

    input.addEventListener('change', () => {
      if (input.files && input.files.length > MAX_FILES) {
        input.files = trimFileList(input.files, MAX_FILES);
      }
      render();
    });

    (['dragenter', 'dragover'] as const).forEach((evt) => {
      dropzone.addEventListener(evt, (e) => {
        e.preventDefault();
        dropzone.classList.add('is-dragover');
      });
    });
    (['dragleave', 'drop'] as const).forEach((evt) => {
      dropzone.addEventListener(evt, (e) => {
        e.preventDefault();
        dropzone.classList.remove('is-dragover');
      });
    });
    dropzone.addEventListener('drop', (e: Event) => {
      const dragEvent = e as DragEvent;
      const dropped = dragEvent.dataTransfer?.files;
      if (!dropped || dropped.length === 0) return;
      const dt = new DataTransfer();
      Array.from(input.files ?? []).forEach((f) => dt.items.add(f));
      Array.from(dropped).forEach((f) => dt.items.add(f));
      input.files = dt.files.length > MAX_FILES ? trimFileList(dt.files, MAX_FILES) : dt.files;
      render();
    });
  }

  function saveState() {
    const data: Record<string, string | boolean | number> = {};
    Array.from(form.elements).forEach((el) => {
      if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement)) return;
      if (!el.name || (el instanceof HTMLInputElement && el.type === 'file')) return;
      if (el instanceof HTMLInputElement && el.type === 'checkbox') {
        data[el.name] = el.checked;
      } else if (el instanceof HTMLInputElement && el.type === 'radio') {
        if (el.checked) data[el.name] = el.value;
      } else {
        data[el.name] = el.value;
      }
    });
    data.__step = currentStep;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      /* storage unavailable — enquiry still works, just without reload persistence */
    }
  }

  function restoreState() {
    let raw: string | null = null;
    try {
      raw = sessionStorage.getItem(STORAGE_KEY);
    } catch {
      raw = null;
    }
    if (!raw) return;

    let data: Record<string, unknown>;
    try {
      data = JSON.parse(raw);
    } catch {
      return;
    }

    Array.from(form.elements).forEach((el) => {
      if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement)) return;
      if (!el.name || !(el.name in data)) return;
      if (el instanceof HTMLInputElement && el.type === 'checkbox') {
        el.checked = Boolean(data[el.name]);
        el.dispatchEvent(new Event('change'));
      } else if (el instanceof HTMLInputElement && el.type === 'radio') {
        el.checked = el.value === data[el.name];
      } else {
        el.value = String(data[el.name]);
      }
    });

    const savedStep = data.__step;
    if (typeof savedStep === 'number' && savedStep > 1 && savedStep <= STEP_COUNT) {
      for (let i = 1; i < savedStep; i += 1) steps[i - 1].hidden = true;
      currentStep = savedStep;
      steps[currentStep - 1].hidden = false;
    }
  }

  function buildSummaryPairs(formData: FormData): [string, string][] {
    const pairs: [string, string][] = [];
    FIELD_LABELS.forEach(([name, label]) => {
      if (CHECKBOX_FIELDS.has(name)) {
        if (formData.has(name)) pairs.push([label, 'Yes']);
        return;
      }
      const raw = formData.get(name);
      if (typeof raw !== 'string' || !raw.trim()) return;
      let value = raw;
      if (name === 'helpType') value = HELP_LABELS[raw] ?? raw;
      if (name === 'timingFixed') value = raw === 'yes' ? 'Yes, fixed' : 'No, flexible';
      pairs.push([label, value]);
    });
    const fileInput = document.getElementById('field-attachments') as HTMLInputElement | null;
    const fileCount = fileInput?.files?.length ?? 0;
    if (fileCount > 0) pairs.push(['Attachments', `${fileCount} file${fileCount === 1 ? '' : 's'}`]);
    return pairs;
  }

  function buildWhatsappSummary(pairs: [string, string][]): string {
    const lines = ['Hi CargoAdvisor, I just submitted a guided enquiry. Summary:'];
    pairs.forEach(([label, value]) => lines.push(`- ${label}: ${value}`));
    return lines.join('\n');
  }

  function showConfirmation(formData: FormData) {
    const summaryPairs = buildSummaryPairs(formData);
    const summaryList = document.getElementById('enquiry-summary-list');
    if (summaryList) {
      summaryList.innerHTML = '';
      summaryPairs.forEach(([label, value]) => {
        const dt = document.createElement('dt');
        dt.textContent = label;
        const dd = document.createElement('dd');
        dd.textContent = value;
        summaryList.append(dt, dd);
      });
    }

    const whatsappBtn = document.getElementById('enquiry-whatsapp-followup') as HTMLAnchorElement | null;
    if (whatsappBtn) {
      whatsappBtn.href = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(buildWhatsappSummary(summaryPairs))}`;
    }

    progressWrap?.setAttribute('hidden', '');
    formPanel?.setAttribute('hidden', '');
    stickyCta?.setAttribute('hidden', '');
    confirmation?.removeAttribute('hidden');

    const heading = document.getElementById('confirmation-title');
    heading?.focus();
    confirmation?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });

    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }

  async function submitForm() {
    errorBanner?.classList.remove('is-visible');
    if (continueBtn) {
      continueBtn.disabled = true;
      continueBtn.textContent = 'Sending…';
    }
    if (stickyContinueBtn) {
      stickyContinueBtn.disabled = true;
      stickyContinueBtn.textContent = 'Sending…';
    }

    const formData = new FormData(form);
    const endpoint = site.formEndpoint;

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        });
        if (!res.ok) throw new Error(`Submission failed with status ${res.status}`);
      } else {
        console.info(
          '[CargoAdvisor] No form endpoint configured (site.formEndpoint in src/config/site.ts). Enquiry was validated but not sent anywhere.'
        );
      }
      showConfirmation(formData);
    } catch (err) {
      console.error('[CargoAdvisor] Enquiry submission failed', err);
      errorBanner?.classList.add('is-visible');
      errorBanner?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'center' });
      if (continueBtn) {
        continueBtn.disabled = false;
        continueBtn.textContent = 'Submit enquiry';
      }
      if (stickyContinueBtn) {
        stickyContinueBtn.disabled = false;
        stickyContinueBtn.textContent = 'Submit enquiry';
      }
    }
  }

  function handleContinue() {
    const stepEl = steps[currentStep - 1];
    const { valid, firstInvalid } = validateStep(stepEl);
    if (!valid) {
      firstInvalid?.focus();
      return;
    }
    if (currentStep < STEP_COUNT) {
      goToStep(currentStep + 1);
    } else {
      submitForm();
    }
  }

  wireConditionalToggles();
  wireFileUpload();
  restoreState();
  wireLiveClearing();

  updateProgress();
  setNavLabels();

  backBtn.addEventListener('click', () => goToStep(currentStep - 1));
  continueBtn.addEventListener('click', handleContinue);
  stickyContinueBtn?.addEventListener('click', handleContinue);
  form.addEventListener('input', saveState);
  form.addEventListener('change', saveState);
  document.getElementById('enquiry-reset-btn')?.addEventListener('click', () => {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    window.location.href = withBase('/enquiry');
  });
}

const enquiryForm = document.getElementById('enquiry-form');
if (enquiryForm instanceof HTMLFormElement) {
  initEnquiryFlow(enquiryForm);
}
