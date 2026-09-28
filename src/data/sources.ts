// Official sources the guides cite, in one place so a moved page is fixed
// once. Every URL was fetched and returned 200 when the guides were last
// reviewed (see LAST_REVIEWED in src/config/content.ts); re-check them on the
// next review.
//
// Note the NEA EPR page: its path contains "(epr)", and the parentheses are
// percent-encoded because the guides' inline link syntax ends at ")".

import type { OfficialSource } from './model';

const src = (label: string, url: string): OfficialSource => ({ label, url });

export const sources = {
  // --- inherited homes ---
  myLegacyDeath: src('My Legacy: when death happens', 'https://mylegacy.life.gov.sg/when-death-happens/'),
  myLegacyWills: src('My Legacy: wills and inheritance', 'https://mylegacy.life.gov.sg/when-death-happens/wills-and-inheritance/'),
  myLegacyProperty: src('My Legacy: settling property inheritance', 'https://mylegacy.life.gov.sg/when-death-happens/settle-property-inheritance/'),
  myLegacyAssets: src('My Legacy: checklist of assets', 'https://mylegacy.life.gov.sg/when-death-happens/checklist-of-assets/'),
  myLegacyCpf: src('My Legacy: settling CPF', 'https://mylegacy.life.gov.sg/when-death-happens/settle-cpf-withdrawal/'),
  myLegacyAccounts: src('My Legacy: closing accounts and subscriptions', 'https://mylegacy.life.gov.sg/when-death-happens/close-accounts-and-cancel-subscriptions/'),
  fjcProbate: src('Family Justice Courts: probate and administration', 'https://www.judiciary.gov.sg/family/probate-and-administration'),
  pto: src('Public Trustee’s Office: information for next of kin', 'https://pto.mlaw.gov.sg/deceased-cpf-estate-monies/information-for-next-of-kin-estate-monies/'),
  willsRegistry: src('Singapore Academy of Law: Wills Registry', 'https://wills.sal.sg/WillHome/Gettingstarted'),
  cpfWill: src('CPF Board: CPF monies not covered by a will', 'https://www.cpf.gov.sg/member/infohub/news/forum-replies/cpf-monies-not-covered-by-a-will'),

  // --- HDB ---
  hdbLifeEvents: src('HDB: retaining a flat after life events', 'https://www.hdb.gov.sg/managing-my-home/home-ownership/change-of-flat-owners-or-occupiers/retain-flat-following-life-events'),
  hdbRentalTermination: src('HDB: returning a public rental flat', 'https://www.hdb.gov.sg/renting-a-flat/public-rental-scheme/tenancy-termination'),
  hdbRentalTakeover: src('HDB: change of tenancy for rental flats', 'https://www.hdb.gov.sg/renting-a-flat/public-rental-scheme/tenancy-matters/change-of-tenancy'),
  hdbResaleCompletion: src('HDB: resale completion for sellers', 'https://www.hdb.gov.sg/managing-my-home/selling-a-flat/process-for-selling-a-flat/resale-flat-completion'),
  hdbExtensionOfStay: src('HDB: temporary extension of stay', 'https://www.hdb.gov.sg/managing-my-home/selling-a-flat/process-for-selling-a-flat/resale-flat-application/request-for-temporary-extension-of-stay'),

  // --- sales and tenancies ---
  lawSocietyConditions: src('Law Society of Singapore: Conditions of Sale 2020 (PDF)', 'https://www.lawsociety.org.sg/wp-content/uploads/2020/11/The-Law-Society-of-Singapores-Conditions-of-Sale-2020.pdf'),
  ceaSelling: src('CEA: buying or selling a private home', 'https://www.cea.gov.sg/consumers/transacting-on-your-own/buying-or-selling-a-private-residential-property/'),
  ceaRenting: src('CEA: renting out a private home', 'https://www.cea.gov.sg/consumers/transacting-on-your-own/renting-or-renting-out-a-private-residential-property/'),
  smallClaims: src('Small Claims Tribunals: eligible cases', 'https://www.judiciary.gov.sg/civil/cases-eligible-small-claim'),

  // --- disposal ---
  neaBulky: src('NEA: disposing of bulky items', 'https://www.nea.gov.sg/our-services/waste-management/waste-management-infrastructure/refuse-disposal-facility/waste-disposal/bulk-item-disposal-disposal-of-garden-wastes-and-dead-pets'),
  neaEwasteWhere: src('NEA: where to recycle e-waste', 'https://www.nea.gov.sg/our-services/waste-management/3r-programmes-and-resources/e-waste-management/where-to-recycle-e-waste'),
  neaEwasteEpr: src('NEA: e-waste take-back and collection', 'https://www.nea.gov.sg/our-services/waste-management/3r-programmes-and-resources/e-waste-management/extended-producer-responsibility-%28epr%29-system-for-e-waste-management-system'),
  townCouncilByLaws: src('Town Councils (Model By-laws) Rules 2026', 'https://sso.agc.gov.sg/SL/TCA1988-S327-2026'),
  neaCollection: src('NEA: waste collection and licensed collectors', 'https://www.nea.gov.sg/our-services/waste-management/waste-collection-systems'),
  neaIllegalDumping: src('NEA: reporting illegal dumping', 'https://www.nea.gov.sg/our-services/waste-management/waste-management-infrastructure/refuse-disposal-facility/waste-disposal/illegal-dumping'),
  neaToxic: src('NEA: toxic industrial waste', 'https://www.nea.gov.sg/our-services/pollution-control/toxic-industrial-waste/toxic-waste-control'),

  // --- condos and strata ---
  // The Act was renamed from the Building Maintenance and Strata Management Act
  // with effect from 1 Oct 2025, and a further revision takes effect on
  // 1 Oct 2026: re-check ss 29, 32 and 48 on the next review.
  strataAct: src('Building (Strata Management) Act 2004', 'https://sso.agc.gov.sg/Act/BSMA2004'),
  strataRegs: src('Strata management regulations and prescribed by-laws', 'https://sso.agc.gov.sg/SL/BSMA2004-S192-2005'),
  bcaStrataGuides: src('BCA: strata management guides', 'https://www1.bca.gov.sg/home-and-building-owners/condo-strata/mcst-strata-management/strata-management-guides/'),
  bcaDisputes: src('BCA Strata Management Guide 9: dispute resolution (PDF)', 'https://isomer-user-content.by.gov.sg/338/1cf2d4ed-d06a-428f-93d1-b4fe5c5b8fa4/smg9-dispute-resolutions.pdf'),
  bcaByLaws: src('BCA Strata Management Guide 10: by-laws (PDF)', 'https://isomer-user-content.by.gov.sg/338/7d4deffc-98fe-4267-a29c-acc41b8a88b3/smg10-by-laws.pdf'),
  strataBoards: src('Strata Titles Boards: disputes', 'https://www.stratatb.gov.sg/general-proceedings/'),
  scdfResidential: src('SCDF: fire safety guidelines for residential estates', 'https://www.scdf.gov.sg/home/community-and-volunteers/fire-emergency-guides/fire-safety-guidelines-for--residential-estate'),
  fireSafetyAct: src('Fire Safety Act 1993', 'https://sso.agc.gov.sg/Act/FSA1993'),

  // --- business premises ---
  pdpcKeyConcepts: src('PDPC: advisory guidelines on key concepts', 'https://www.pdpc.gov.sg/assets/34058be5-ae13-4c40-89e6-1c945d19f65c'),
  pdpcIct: src('PDPC: data protection practices for ICT systems', 'https://www.pdpc.gov.sg/assets/c752cf2b-844b-4163-82a5-ae5a9eb5c982'),
  pdpcElectronic: src('PDPC: securing personal data in electronic medium (PDF)', 'https://isomer-user-content.by.gov.sg/36/cc8c2f8d-e43f-4492-9cdf-bc192894d9e9/guidetosecuringpersonaldatainelectronicmedium0903178d4749c8844062038829ff0000d98b0f.pdf'),
  pdpcMcst: src('PDPC: advisory guidelines for management corporations', 'https://www.pdpc.gov.sg/assets/3d215b66-6798-4da5-8bd8-e598118dc9b4'),
  pdpcEnforcement: src('PDPC: advisory guidelines on enforcement', 'https://www.pdpc.gov.sg/assets/95a3adea-1b5d-474f-b683-6f0a4b65bca5'),
  imdaDisposal: src('IMDA: how organisations can dispose of personal data (PDF)', 'https://www.imda.gov.sg/assets/0df83824-76d5-49e6-80fd-ee9a954692aa.pdf'),
  jtcLeaseExpiry: src('JTC Corporation: returning premises at lease expiry', 'https://www.jtc.gov.sg/get-help/managing-your-tenancy-or-lease/returning-your-premises-upon-lease-expiry'),
  hdbShopTermination: src('HDB: ending a shop or office tenancy', 'https://www.hdb.gov.sg/shops-and-offices/managing-an-hdb-shop-or-office/terminate-tenancy'),
  mtiRetailCode: src('MTI: the retail leasing code and security deposits', 'https://www.mti.gov.sg/newsroom/written-reply-to-pq-on-protection-against-unfair-business-practices-for-small-retail-subtenants-in-commercial-properties/'),
  bcaMinorWorks: src('BCA: building works that don’t need approval', 'https://www1.bca.gov.sg/guidelines-and-requirements/building-works-not-requiring-approval/'),
  scdfPlanApproval: src('SCDF: plan approval for fire safety works', 'https://www.scdf.gov.sg/fire-safety-services-listing/plans-submission-process/plan-approval'),
};
