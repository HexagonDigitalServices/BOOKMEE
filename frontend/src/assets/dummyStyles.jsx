export const appLayoutStyles = {
  container:
    'min-h-screen bg-[#f7f8f9] text-slate-800 flex flex-col',
  header:
    'border-b border-slate-200 bg-white sticky top-0 z-40',
  headerInner:
    'mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:py-4 md:px-6',
  logoLink:
    'flex min-w-0 items-center gap-2',
  logoImg:
    'h-8 md:h-10 w-auto',
  logoText:
    'text-[22px] md:text-[26px] tracking-tight text-slate-800 custom-brand-font mt-1 md:mt-2',
  navDesktop:
    'hidden items-center gap-1 lg:flex',
  navLinkActive:
    'rounded-full px-3 py-2 text-sm font-medium transition-all border border-indigo-600 bg-[#F4F0FF] text-[#7D57F5] xl:px-4',
  navLinkInactive:
    'rounded-full px-3 py-2 text-sm font-medium transition-all text-slate-500 hover:bg-slate-50 hover:text-slate-800 xl:px-4',
  rightSection:
    'flex shrink-0 items-center gap-2 md:gap-3',
  accountMenu:
    'relative',
  avatarButton:
    'flex items-center gap-2 outline-none hover:opacity-80 transition-opacity',
  avatarCircle:
    'flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-gradient-to-b from-[#CBB8FF] via-[#9B7BFF] to-[#7D57F5] text-xs md:text-sm font-bold text-white shadow-sm',
  displayName:
    'hidden text-sm font-medium text-slate-700 lg:block',
  chevron:
    'hidden lg:block h-4 w-4 text-slate-400 transition-transform',
  chevronOpen:
    'rotate-180',
  dropdown:
    'absolute right-0 mt-2 w-48 origin-top-right rounded-[12px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white ring-1 ring-slate-100 z-50 overflow-hidden border border-slate-100 py-1',
  logoutButton:
    'flex w-full items-center gap-2 px-4 py-2.5 text-[14px] font-semibold text-red-600 hover:bg-slate-50 transition-colors',
  logoutIcon:
    'h-4 w-4',
  loginLink:
    'rounded-full bg-gradient-to-b from-[#CBB8FF] via-[#9B7BFF] to-[#7D57F5] px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity',
  mobileMenuButton:
    'lg:hidden p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 outline-none',
  srOnly:
    'sr-only',
  mobileMenuIcon:
    'block h-6 w-6',
  mobileNav:
    'lg:hidden border-t border-slate-200 bg-white',
  mobileNavInner:
    'space-y-1 px-4 pb-4 pt-2',
  mobileNavLinkActive:
    'block rounded-md px-3 py-2.5 text-base font-medium transition-all bg-[#F4F0FF] text-[#7D57F5]',
  mobileNavLinkInactive:
    'block rounded-md px-3 py-2.5 text-base font-medium transition-all text-slate-600 hover:bg-slate-50 hover:text-slate-900',
  main:
    'mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8 w-full overflow-hidden flex-1 min-h-[calc(100vh-80px)]',
  footerBrandSection:
    'relative mt-auto overflow-hidden bg-[#f7f8f9] px-4 pt-6 md:px-6 md:pt-8 text-center sm:text-left',
  footerCard:
    'relative z-10 mx-auto max-w-7xl rounded-[24px] sm:rounded-[32px] border border-slate-200/40 bg-white px-6 py-6 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] sm:px-8 sm:py-8 md:px-12 md:py-10',
  footerCardTop:
    'flex items-center justify-between gap-6',
  footerBrandMark:
    'flex items-center gap-3',
  footerMiniLogo:
    'h-9 w-auto object-contain',
  footerBrandName:
    'custom-brand-font text-[26px] tracking-tight text-slate-950',
  footerRule:
    'my-8 h-px w-full bg-slate-100',
  footerBottom:
    'flex flex-col items-center gap-4 text-[12px] font-semibold text-slate-400 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left',
  footerLegalGroup:
    'flex flex-col items-center gap-2 sm:flex-row sm:gap-4',
  footerCopyright:
    'text-slate-400',
  footerLinks:
    'flex items-center gap-3',
  footerLink:
    'text-[12px] font-semibold text-slate-400 hover:text-[#7D57F5] transition-colors',
  footerSeparator:
    'text-slate-300',
  footerWatermarkWrapper:
    'relative w-full h-[70px] sm:h-[120px] md:h-[160px] lg:h-[200px] overflow-hidden flex items-start justify-center',
  footerLogoWatermark:
    'pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2 whitespace-nowrap select-none custom-brand-font text-[90px] sm:text-[150px] md:text-[220px] lg:text-[280px] leading-none tracking-tight text-[#e9ecef] [mask-image:linear-gradient(to_bottom,black_10%,transparent_80%)] [-webkit-mask-image:linear-gradient(to_bottom,black_10%,transparent_80%)]',
  footerCreditWrapper:
    'flex items-center justify-center mt-2 sm:mt-0',
  footerCreditLink:
    'flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-2.5 text-[12px] font-semibold text-slate-400 transition-colors hover:text-slate-700 group',
  footerCreditLogo:
    'h-4 sm:h-5 w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm',
  footerCreditText:
    'leading-tight text-center sm:text-left max-w-[200px] sm:max-w-none',
  footerCreditName:
    'font-extrabold text-[#7D57F5] underline decoration-[#7D57F5]/30 underline-offset-4',
};

export const brandThemeOptions = [
  {
    id: "emerald",
    label: "Emerald",
    accent: "#047857",
    swatch: "bg-emerald-500",
  },
  { id: "indigo", label: "Indigo", accent: "#1e104f", swatch: "bg-[#1e104f]" },
  { id: "rose", label: "Rose", accent: "#e11d48", swatch: "bg-rose-500" },
  { id: "amber", label: "Amber", accent: "#d97706", swatch: "bg-amber-500" },
  { id: "slate", label: "Slate", accent: "#0f172a", swatch: "bg-slate-900" },
];

export const brandThemeStyles = {
  emerald: {
    panel: "#052e16",
    panelDeep: "#022c22",
    panelSoft: "#064e3b",
    bg: "bg-[#052e16]",
    gradient: "from-[#022c22] to-[#064e3b]/80",
    button: "bg-[#047857]",
    avatar: "bg-[#10b981]",
    accent: "#047857",
  },
  indigo: {
    panel: "#1e104f",
    panelDeep: "#1e104f",
    panelSoft: "#312e81",
    bg: "bg-[#1e104f]",
    gradient: "from-[#1e104f] to-[#312e81]/80",
    button: "bg-[#4338ca]",
    avatar: "bg-[#6366f1]",
    accent: "#1e104f",
  },
  rose: {
    panel: "#4c0519",
    panelDeep: "#4c0519",
    panelSoft: "#881337",
    bg: "bg-[#4c0519]",
    gradient: "from-[#4c0519] to-[#881337]/80",
    button: "bg-[#be123c]",
    avatar: "bg-[#f43f5e]",
    accent: "#e11d48",
  },
  amber: {
    panel: "#451a03",
    panelDeep: "#451a03",
    panelSoft: "#78350f",
    bg: "bg-[#451a03]",
    gradient: "from-[#451a03] to-[#78350f]/80",
    button: "bg-[#b45309]",
    avatar: "bg-[#f59e0b]",
    accent: "#d97706",
  },
  slate: {
    panel: "#0f172a",
    panelDeep: "#020617",
    panelSoft: "#1e293b",
    bg: "bg-[#0f172a]",
    gradient: "from-[#020617] to-[#1e293b]/80",
    button: "bg-[#334155]",
    avatar: "bg-[#64748b]",
    accent: "#0f172a",
  },
};

export const getBrandThemeStyle = (themeId) => (
  brandThemeStyles[themeId] || brandThemeStyles.emerald
);

export const availabilityPageStyles = {
  mainGrid:
    'grid gap-8 lg:grid-cols-[0.85fr_1.15fr]',
  leftTopArea:
    'flex items-start justify-between',
  availabilityLabel:
    'text-xs font-bold uppercase tracking-[0.2em] text-[#7D57F5]',
  mainHeading:
    'mt-2 text-[28px] md:text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#0D0E2A]',
  gradientText:
    'bg-gradient-to-b from-[#FDE68A] via-[#F59E0B] to-[#D97706] bg-clip-text text-transparent custom-brand-font text-[32px] md:text-[42px] relative top-0 md:top-1 ml-1 md:ml-2 line-clamp-1',
  subText:
    'mt-2 max-w-sm text-sm text-slate-500',
  illustrationContainer:
    'hidden lg:block h-48 w-48 flex-shrink-0',
  illustrationImg:
    'w-full h-full object-contain drop-shadow-sm',
  dayListContainer:
    'mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-3',
  dayButtonActive:
    'flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all border-[#7D57F5] bg-[#F4F0FF] shadow-sm ring-2 ring-[#7D57F5]/20',
  dayButtonInactive:
    'flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all border-slate-200 bg-white hover:border-slate-300',
  dayIconContainerActive:
    'flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-b from-[#CBB8FF] via-[#9B7BFF] to-[#7D57F5] text-white',
  dayIconContainerInactive:
    'flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500',
  dayIcon:
    'h-4 w-4',
  dayLabelActive:
    'text-sm font-semibold text-[#7D57F5]',
  dayLabelInactive:
    'text-sm font-semibold text-slate-700',
  dayCheckActiveContainer:
    'flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-b from-[#CBB8FF] via-[#9B7BFF] to-[#7D57F5]',
  dayCheckActiveIcon:
    'h-4 w-4 text-white',
  dayCheckInactiveCircle:
    'h-5 w-5 rounded-full border-2 border-slate-300',
  infoBox:
    'mt-4 flex items-start gap-3 rounded-2xl bg-slate-50 px-5 py-4',
  infoBoxIcon:
    'mt-0.5 h-5 w-5 flex-shrink-0 text-slate-400',
  infoBoxText:
    'text-sm text-slate-500',
  infoBoxStrong:
    'font-semibold text-slate-700',
  rightSection:
    'rounded-2xl border border-slate-200 bg-white p-6 shadow-sm',
  rightTopBar:
    'flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4',
  rightTopLeft:
    'flex items-center gap-3',
  rightTopIconContainer:
    'flex h-10 w-10 items-center justify-center rounded-xl bg-[#EBE4FF]',
  rightTopCalendarIcon:
    'h-5 w-5 text-[#7D57F5]',
  rightDayName:
    'text-lg font-bold text-slate-900',
  rightSummaryText:
    'text-sm text-slate-500',
  addWindowButton:
    'flex items-center gap-1.5 rounded-xl bg-gradient-to-b from-[#CBB8FF] via-[#9B7BFF] to-[#7D57F5] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity',
  addWindowIcon:
    'h-4 w-4',
  slotsContainer:
    'mt-6 space-y-4',
  slotCard:
    'rounded-2xl border border-slate-200 bg-white p-5',
  slotGrid:
    'grid gap-4 sm:grid-cols-[1fr_1fr_auto]',
  slotLabel:
    'text-sm font-medium text-slate-700',
  timeInputContainer:
    'relative mt-1.5',
  timeInputClockIcon:
    'pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400',
  timeInput:
    'w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#7D57F5] focus:ring-2 focus:ring-[#7D57F5]/20',
  removeSlotButton:
    'flex items-center justify-center sm:justify-start gap-1.5 self-center sm:self-end w-full sm:w-auto mt-2 sm:mt-0 rounded-xl px-4 py-3 text-[13px] sm:text-sm font-semibold text-rose-600 hover:bg-rose-50 border border-slate-200 sm:border-none',
  removeSlotIcon:
    'h-4 w-4',
  dashedAddButton:
    'mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#CBB8FF] py-4 text-sm font-semibold text-[#7D57F5] hover:bg-[#F4F0FF]',
  dashedAddIcon:
    'h-4 w-4',
  saveButton:
    'mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#CBB8FF] via-[#9B7BFF] to-[#7D57F5] px-5 py-3.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity disabled:opacity-60',
  saveIcon:
    'h-4 w-4',
  message:
    'mt-3 text-sm text-slate-600',
};

export const authPageStyles = {
  // Layout
  pageBg: "min-h-screen bg-[#f8f9fc] p-6 text-slate-900",
  gridContainer: "mx-auto grid min-h-[calc(100vh-3rem)] max-w-5xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]",
  brandSection: "space-y-6",
  logoRow: "flex items-center gap-2",
  logoImg: "h-10 w-auto",
  brandName: "text-[22px] md:text-[26px] tracking-tight text-slate-800 custom-brand-font mt-1 md:mt-2",
  mainHeading: "text-4xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-5xl",
  gradientText: "bg-gradient-to-b from-[#CBB8FF] via-[#9B7BFF] to-[#7D57F5] bg-clip-text text-transparent custom-brand-font text-[38px] md:text-[46px] ml-2",
  subtitle: "max-w-lg text-lg text-slate-500",

  // Feature cards
  featureGrid: "grid gap-3 sm:grid-cols-3",
  featureCard: "flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4",
  featureIconWrapPurple: "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#EBE4FF]",
  featureIconWrapEmerald: "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100",
  featureIconWrapAmber: "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-amber-100",
  featureIconPurple: "h-4 w-4 text-[#7D57F5]",
  featureIconEmerald: "h-4 w-4 text-emerald-600",
  featureIconAmber: "h-4 w-4 text-amber-600",
  featureTitle: "text-sm font-semibold text-slate-800",
  featureDesc: "mt-0.5 text-xs text-slate-500",

  // Auth form card
  formCard: "rounded-2xl border border-slate-200 bg-white p-7 shadow-sm",
  formHeading: "text-2xl font-bold text-slate-900",
  formSubtitle: "mt-1 text-sm text-slate-500",
  form: "mt-6 space-y-4",

  // Inputs
  inputLabel: "mb-1.5 block text-sm font-medium text-slate-700",
  inputWrapper: "relative",
  inputIcon: "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400",
  inputField: "w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#7D57F5] focus:ring-2 focus:ring-[#7D57F5]/20",
  otpField: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#7D57F5] focus:ring-2 focus:ring-[#7D57F5]/20",

  // OTP section
  otpContainer: "rounded-2xl border border-[#EBE4FF] bg-[#F4F0FF]/50 p-4",
  otpLabel: "text-sm font-semibold text-[#7D57F5]",
  otpGrid: "mt-2 grid gap-3 sm:grid-cols-[1fr_auto]",
  otpButton: "rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-60",
  otpVerifiedButton: "flex items-center gap-1.5 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white",
  otpVerifiedIcon: "h-4 w-4",

  // Submit button
  submitBtn: "flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#CBB8FF] via-[#9B7BFF] to-[#7D57F5] py-3.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity disabled:opacity-60",
  submitIcon: "h-4 w-4",

  // Messages
  message: "rounded-xl bg-[#F4F0FF] p-3 text-sm text-[#7D57F5]",
  toggleMode: "mt-5 text-sm font-medium text-slate-500 hover:text-[#7D57F5]",
  footerLinks: "w-full text-center pb-10 text-sm text-slate-500 font-medium flex justify-center gap-6 mt-6",
  footerLink: "hover:text-indigo-600 transition-colors",
};
export const bookingCancelledPageStyles = {
  container: 'flex min-h-screen items-center justify-center bg-[#f8f9fc] px-5 py-10 text-slate-900',
  card: 'w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm',
  iconCircle: 'mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-100',
  icon: 'h-8 w-8 text-rose-600',
  statusLabel: 'mt-4 text-xs font-bold uppercase tracking-[0.2em] text-rose-600',
  heading: 'mt-3 text-2xl font-bold tracking-tight text-slate-900',
  description: 'mt-3 text-sm text-slate-500',
  homeLink: 'mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#CBB8FF] via-[#9B7BFF] to-[#7D57F5] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity',
  homeLinkIcon: 'h-4 w-4',
};

export const bookingsPageStyles = {
  // Header section
  headerSection:
    "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-8",
  headerLeftArea: "flex items-start gap-8",
  bookingLabel:
    "text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#8b5cf6] mb-3",
  mainHeading:
    "text-[28px] md:text-[32px] font-extrabold tracking-tight text-[#0D0E2A] leading-tight",
  mainHeadingGradient:
    "bg-gradient-to-b from-[#CBB8FF] via-[#9B7BFF] to-[#7D57F5] bg-clip-text text-transparent custom-brand-font text-[32px] md:text-[38px] relative top-0.5",
  subText: "mt-3 text-[14px] font-medium text-slate-500",
  illustrationContainer:
    "hidden lg:block h-48 w-48 flex-shrink-0 -mt-2",
  illustrationImg:
    "w-full h-full object-contain drop-shadow-sm",

  // Filters
  filterRow:
    "flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto",
  filterDateContainer: "relative w-full sm:w-auto",
  filterDateInput:
    "w-full sm:w-[220px] rounded-[16px] border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-[13px] font-bold text-slate-700 outline-none transition focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] shadow-sm hover:border-slate-300",
  filterStatusContainer: "relative w-full sm:w-auto",
  filterStatusSelect:
    "appearance-none w-full sm:w-[150px] rounded-[16px] border border-slate-200 bg-white py-3.5 pl-5 pr-11 text-[13px] font-bold text-slate-700 capitalize outline-none transition focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] shadow-sm hover:border-slate-300",
  filterIcon:
    "pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400", // used on CalendarDays in date input
  // Filter icon for select uses right positioning, so we add separate key
  filterSelectIcon:
    "pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400",

  // Message banner
  messageBanner:
    "mb-6 p-4 rounded-2xl text-[13px] font-bold flex items-center gap-2 border",
  messageBannerSuccess: "bg-emerald-50 text-emerald-700 border-emerald-100",
  messageBannerInfo:
    "bg-[#F4F0FF] text-[#7D57F5] border-[#EBE4FF]",

  // Empty state
  emptyStateContainer:
    "rounded-[24px] border border-slate-200 bg-white p-12 text-center shadow-sm",
  emptyStateIcon: "mx-auto h-12 w-12 text-slate-300 mb-4",
  emptyStateText: "text-[14px] font-bold text-slate-500",

  // Booking card
  cardContainer:
    "rounded-[24px] border border-slate-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md relative",
  cardMenuButton:
    "absolute top-6 right-6 p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 rounded-lg transition-colors",
  cardInnerLayout:
    "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between",
  cardLeftBlock: "flex-1",

  // Status / payment badges
  badgesContainer: "flex flex-wrap items-center gap-3",
  statusBadgeBase:
    "flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-wide uppercase",
  statusBadgeClassMap: {
    confirmed: "bg-[#eef2ff] text-[#4f46e5]",
    cancelled: "bg-[#fff1f2] text-[#e11d48]",
    pending: "bg-[#fffbeb] text-[#d97706]",
    pending_payment: "bg-[#f3e8ff] text-[#7c3aed]",
    payment_failed: "bg-[#fef2f2] text-[#dc2626]",
    default: "bg-slate-50 text-slate-600",
  },
  paymentBadgeBase:
    "flex items-center gap-1.5 rounded-[10px] px-3.5 py-1.5 text-[11px] font-extrabold tracking-wide uppercase",
  paymentBadgeClassMap: {
    paid: "bg-[#ecfdf5] text-[#059669]",
    not_required: "bg-[#fff7ed] text-[#ea580c]",
    default: "bg-slate-50 text-slate-600",
  },
  badgeIcon: "h-3.5 w-3.5",

  // Customer info
  customerInfoRow: "mt-7 flex items-center gap-4",
  customerAvatarContainer:
    "flex h-[52px] w-[52px] items-center justify-center rounded-full bg-slate-100 shadow-sm overflow-hidden border border-slate-200",
  customerAvatarImg: "w-full h-full object-cover",
  customerName:
    "text-[18px] font-extrabold text-slate-900 tracking-tight leading-tight mb-0.5",
  customerEmail: "text-[13px] font-medium text-slate-500",

  // Date & service details
  bookingDetailsRow: "flex items-start gap-3.5 mt-7",
  bookingDetailsIconContainer:
    "w-11 h-11 rounded-[12px] bg-[#f5f3ff] flex items-center justify-center flex-shrink-0",
  bookingDetailsIcon: "w-[20px] h-[20px] text-[#8b5cf6]",
  bookingDetailsTextContainer: "pt-0.5 flex-1 w-full overflow-hidden",
  bookingDateTimeText:
    "text-[14px] md:text-[15px] font-extrabold text-[#0f172a] leading-tight mb-1.5 break-words",
  bookingServiceRow: "flex items-center gap-2 flex-wrap",
  bookingServiceDot: "w-1.5 h-1.5 rounded-full bg-[#8b5cf6]",
  bookingServiceText:
    "text-[12px] font-bold text-slate-500 tracking-wide",

  // Timestamps
  timestampsContainer:
    "mt-8 flex flex-wrap items-center gap-3 md:gap-5 text-[11px] font-extrabold uppercase text-slate-400 tracking-wide",
  timestampSpan: "flex items-center gap-1.5",
  timestampIcon: "w-3.5 h-3.5",

  // Calendar sync & external link
  calendarSyncRow:
    "mt-2.5 flex items-center gap-1.5 text-[11px] font-extrabold uppercase text-slate-400 tracking-wide",
  calendarLinkButton:
    "mt-5 inline-flex items-center gap-1.5 text-[12px] font-bold text-[#6C47FF] hover:underline pb-2",
  calendarLinkUnavailable:
    "mt-5 inline-flex items-center gap-1.5 text-[12px] font-bold text-slate-400 pb-2 cursor-not-allowed",
  calendarLinkIcon: "h-3.5 w-3.5",

  // Right action block
  cardRightBlock: "flex flex-col gap-4 lg:w-auto pt-2 justify-center",
  
  // Action buttons
  actionButtonsContainer: "flex flex-wrap sm:flex-nowrap gap-3 mt-1.5 ml-1",
  rescheduleButton:
    "flex flex-1 sm:flex-none items-center justify-center gap-1.5 rounded-full bg-[#f3f4f6] px-4 py-2.5 text-[12px] font-extrabold tracking-wide text-slate-700 hover:bg-slate-200 transition-colors",
  cancelButton:
    "flex flex-1 sm:flex-none items-center justify-center gap-1.5 rounded-full bg-[#fff1f2] px-4 py-2.5 text-[12px] font-extrabold tracking-wide text-[#e11d48] hover:bg-[#ffe4e6] transition-colors",
  actionIcon: "h-3.5 w-3.5",

  // Modals
  modalOverlay: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4",
  modalContent: "w-full max-w-md rounded-2xl bg-white shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200",
  modalHeader: "px-6 py-5 border-b border-slate-100 flex items-center justify-between",
  modalTitle: "text-lg font-bold text-slate-900",
  modalCloseBtn: "text-slate-400 hover:text-slate-600 transition-colors rounded-lg p-1 hover:bg-slate-100",
  modalBody: "px-6 py-5",
  modalMessage: "text-sm text-slate-600 mb-6",
  modalFooter: "px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3",
  modalButtonSecondary: "px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-200 bg-slate-100 rounded-xl transition-colors",
  modalButtonPrimary: "px-4 py-2 text-sm font-semibold text-white bg-[#09090b] hover:bg-slate-800 rounded-xl transition-colors shadow-sm",
  modalButtonDanger: "px-4 py-2 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-xl transition-colors shadow-sm",
  
  // Reschedule Form inside Modal
  rescheduleGrid: "flex flex-col gap-4",
  rescheduleInputContainer: "relative w-full",
  rescheduleInputIcon: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400",
  rescheduleInputField: "w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6]",

  // List wrapper
  bookingListSection: "space-y-5 pb-12",
};

export const bookingSuccessPageStyles = {
  container: "flex min-h-screen items-center justify-center bg-[#f8f9fc] px-5 py-10 text-slate-900",
  card: "w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm",
  iconCircle: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100",
  checkIcon: "h-8 w-8 text-emerald-600",
  statusLabel: "mt-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600",
  heading: "mt-3 text-2xl font-bold tracking-tight text-slate-900",
  bookingDetails: "mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left",
  serviceRow: "flex items-center gap-2",
  calendarDaysIcon: "h-4 w-4 text-[#7D57F5]",
  serviceName: "font-semibold text-slate-900",
  detailText: "mt-1.5 text-sm text-slate-500",
  statusText: "mt-1 text-sm capitalize text-slate-500",
  addToCalendarLink: "mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#CBB8FF] via-[#9B7BFF] to-[#7D57F5] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity",
  calendarIcon: "h-4 w-4",
  backLink: "mt-4 flex items-center justify-center gap-1.5 text-sm font-medium text-slate-500 hover:text-[#7D57F5]",
  backIcon: "h-4 w-4",
};

// dummyStyles.js - Centralized styles for all components
// dummyStyles.js - Centralized styles for all components
export const dashboardPageStyles = {
  // Layout & containers
  mainContainer: "mx-auto max-w-7xl p-4 md:p-10 space-y-8 min-h-screen text-slate-800 tracking-tight font-sans",
  heroGrid: "grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6",
  chartsGrid: "grid grid-cols-1 lg:grid-cols-[1.75fr_1fr] gap-6",
  bottomGrid: "grid grid-cols-1 lg:grid-cols-2 gap-6",

  // Header
  headerTitle: "text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight",
  gradientText: "bg-gradient-to-b from-[#CBB8FF] via-[#9B7BFF] to-[#7D57F5] bg-clip-text text-transparent custom-brand-font text-[28px] md:text-[36px] ml-2",
  headerSubtitle: "mt-1.5 text-[15px] font-medium text-slate-500",
  headerButtonsContainer: "mt-6 flex flex-wrap gap-3",
  headerButton: "px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-[13px] font-bold rounded-full shadow-sm hover:bg-slate-50 transition-colors",

  // Hero first card
  heroCard: "bg-gradient-to-r from-[#f5eeff] via-[#f7f0fe] to-[#eff4ff] rounded-[24px] p-8 md:p-10 flex justify-between items-center relative overflow-hidden shadow-sm border border-white",
  heroContent: "z-10 relative max-w-[340px]",
  heroTitle: "text-[32px] md:text-[38px] lg:text-[44px] tracking-tight font-extrabold text-[#0D0E2A] leading-[1.1]",
  heroButton: "mt-8 inline-flex items-center justify-center px-6 py-3 bg-white text-[#7D57F5] text-[14px] font-bold rounded-full shadow-sm hover:shadow transition-all border border-[#EBE4FF]",
  arrowIcon: "w-4 h-4 ml-2",
  heroImageWrapper: "hidden sm:block absolute right-4 bottom-0 h-full w-[45%] pointer-events-none",
  heroImage: "w-full h-full object-contain object-bottom drop-shadow-[0_10px_35px_rgba(96,91,255,0.25)]",

  // Hero second card (public link)
  publicLinkCard: "bg-white border border-slate-100 rounded-[24px] p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)]",
  publicLinkTitle: "font-bold text-slate-900 text-[15px]",
  publicLinkInputContainer: "mt-4 p-2 bg-[#fafafa] rounded-[14px] flex items-center gap-2 border border-slate-100 focus-within:ring-2 focus-within:ring-[#605bff] transition-shadow",
  publicLinkText: "flex-1 text-[13px] text-slate-800 font-bold truncate pl-3",
  copyButton: "p-2.5 bg-white border border-slate-200 rounded-[10px] shadow-sm hover:bg-slate-50 text-slate-600 transition-colors shrink-0",
  copyIcon: "w-4 h-4",
  publicLinkHelper: "mt-4 text-[13px] text-slate-500 font-medium leading-relaxed",
  shareTitle: "mt-6 text-[13px] font-bold text-slate-900",
  socialIconsContainer: "mt-3 flex flex-wrap gap-3 md:gap-4",
  socialIconLink: "w-[46px] h-[46px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors hover:scale-105",
  socialIconLinkInstagram: "w-[50px] h-[50px] rounded-full flex items-center justify-center bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors hover:scale-105",
  socialIconImgWhatsapp: "w-[36px] h-[36px] object-contain drop-shadow-sm",
  socialIconImgInstagram: "w-[26px] h-[26px] object-contain drop-shadow-sm scale-[1.1]",
  socialIconImgFacebook: "w-[30px] h-[30px] object-contain drop-shadow-sm",
  socialIconImgGmail: "w-[36px] h-[36px] object-contain drop-shadow-sm",
  copySocialButton: "w-[46px] h-[46px] md:w-[50px] md:h-[50px] bg-[#F4F0FF] text-[#7D57F5] rounded-full flex items-center justify-center transition-colors hover:bg-[#EBE4FF] flex-shrink-0 hover:scale-105",

  // Stats cards
  statsGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
  statCard: "bg-white rounded-[24px] p-6 border border-slate-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] flex flex-col items-start gap-4",
  statIconWrapper: "p-4 rounded-[16px]",
  statLabel: "text-[13px] font-bold text-slate-500 mb-1",
  statValue: "text-[28px] font-extrabold text-slate-900 tracking-tight",

  // Charts section common
  chartCard: "bg-white rounded-[24px] p-8 border border-slate-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)]",
  chartHeader: "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4",
  chartTitle: "text-[16px] font-bold text-slate-900",
  chartSelect: "px-3 py-1.5 bg-slate-50 text-slate-600 font-semibold text-[13px] border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-[#8b5cf6] cursor-pointer",
  chartOverflow: "overflow-x-auto overflow-y-hidden md:overflow-visible",
  chartInnerWrapper: "min-w-[600px] md:min-w-0",
  statusPanelContainer: "mt-[30px]",

  // Top services
  topServicesCard: "bg-white rounded-[24px] p-8 border border-slate-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] flex flex-col h-full",
  servicesHeader: "flex justify-between items-center mb-6",
  viewAllLink: "px-4 py-[6px] bg-white text-slate-600 hover:text-slate-900 text-[12px] font-bold rounded-full border border-slate-200 shadow-sm",
  servicesList: "space-y-6 flex-1 mt-2",
  serviceRow: "flex items-center gap-4",
  serviceIconBox: "w-[46px] h-[46px] rounded-[14px] flex items-center justify-center shrink-0 border border-slate-200 bg-white overflow-hidden",
  serviceIconImg: "w-full h-full object-cover",
  serviceInfo: "flex-1 min-w-0",
  serviceNameRow: "flex justify-between items-center mb-[6px]",
  serviceName: "font-bold text-slate-900 text-[14px] truncate",
  serviceBookingCount: "text-[12px] font-semibold text-slate-500 mt-[2px]",
  servicePercent: "text-[13px] font-bold text-slate-600 shrink-0",
  progressBarContainer: "h-[4px] w-full bg-[#f1f5f9] rounded-full overflow-hidden",
  progressFillBase: "h-full rounded-full transition-all duration-500",

  // Earnings Overview
  earningsCard: "bg-white rounded-[24px] p-8 border border-slate-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] flex flex-col relative h-full",
  earningsHeader: "flex flex-col sm:flex-row justify-between items-start sm:items-center z-10 gap-4 mb-4",
  earningsSelect: "px-3 py-1.5 bg-white text-slate-600 font-semibold text-[13px] border border-slate-200 rounded-lg outline-none shadow-sm focus:ring-2 focus:ring-[#8b5cf6] cursor-pointer",
  earningsAmountRow: "mt-2 sm:mt-6 z-10 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4",
  earningsAmount: "text-[28px] sm:text-[34px] leading-tight font-extrabold text-slate-900 tracking-tight",
  earningsTrendContainer: "flex items-center gap-1.5 mt-0 sm:mt-2",
  earningsTrendUp: "text-[#16a34a] font-bold text-[12px] flex items-center",
  earningsTrendDown: "text-[#ef4444] font-bold text-[12px] flex items-center",
  trendArrow: "w-3.5 h-3.5",
  trendLabel: "text-slate-500 text-[12px] font-medium",
  earningsChartWrapper: "mt-8 flex-1 w-full flex items-end overflow-x-auto overflow-y-hidden md:overflow-visible",
  earningsChartInner: "min-w-[600px] md:min-w-0 w-full",

  // Upcoming Bookings
  upcomingCard: "bg-white rounded-[24px] p-8 border border-slate-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] flex flex-col h-full",
  upcomingHeader: "flex justify-between items-center mb-6",
  upcomingList: "space-y-5 mt-2 flex-1",
  bookingRow: "flex items-center justify-between",
  bookingLeft: "flex items-center gap-3.5",
  avatarBox: "w-[42px] h-[42px] rounded-full bg-slate-100 shadow-sm overflow-hidden border border-slate-200",
  avatarImg: "w-full h-full object-cover",
  bookingCustomerName: "font-bold text-slate-900 text-[14px]",
  bookingServiceName: "text-[12px] text-slate-500 font-medium mt-[2px]",
  bookingRight: "flex items-center gap-6",
  bookingDateTimeWrapper: "hidden sm:block text-right",
  bookingDate: "flex items-center justify-end gap-1.5 text-[12px] text-slate-500 font-medium whitespace-nowrap",
  bookingTime: "flex items-center justify-end gap-1.5 text-[12px] text-slate-500 font-medium mt-1.5 whitespace-nowrap",
  calendarIconSmall: "w-3.5 h-3.5",
  clockIconSmall: "w-3.5 h-3.5",
  bookingBadgeBase: "px-3 py-1.5 rounded-[8px] text-[11px] font-bold min-w-[80px] text-center",
  badgeConfirmed: "bg-[#eafbef] text-[#16a34a]",
  badgePending: "bg-[#ffedd5] text-[#ea580c]",

  // Integrations
  integrationsCard: "bg-white rounded-[24px] p-8 border border-slate-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] flex flex-col relative h-full overflow-hidden",
  integrationsTitle: "text-[16px] font-bold text-slate-900 mb-8 z-10",
  integrationsList: "space-y-6 z-10",
  integrationItem: "flex items-center gap-4 group",
  integrationIconBox: "w-[56px] h-[56px] rounded-[16px] bg-white border border-slate-100 shadow-sm flex items-center justify-center relative overflow-hidden group-hover:border-slate-300 transition-colors",
  integrationIconImgDefault: "w-[40px] h-[40px] object-contain",
  integrationIconImgGmail: "w-[48px] h-[48px] object-contain",
  integrationName: "font-bold text-slate-900 text-[15px]",
  integrationStatus: "flex items-center gap-1.5 mt-1",
  checkIcon: "w-4 h-4 text-[#16a34a]",
  checkIconSmall: "w-3.5 h-3.5 text-[#16a34a]",
  statusText: "text-[13px] text-[#16a34a] font-bold",
  statusTextSmall: "text-[12px] text-[#16a34a] font-bold",
  integrationsImageWrapper: "absolute right-[-10%] bottom-0 w-[55%] h-[90%] flex items-center justify-center pointer-events-none z-0",
  integrationsImage: "w-full h-full object-contain object-bottom drop-shadow-[-10px_10px_30px_rgba(96,91,255,0.15)]",

  // BarChart specific (used within BarChart component)
  barChartWrapper: "w-full relative",
  barChartSvg: "w-full h-full max-h-[240px]",
  barChartTickText: "fill-slate-400 text-[10px] font-semibold",
  barChartBarInteractive: "cursor-pointer",
  barChartBar: "transition-all duration-300 pointer-events-none",
  barChartLabel: "fill-slate-400 text-[10px] font-semibold",
  barChartTooltip: "absolute bg-slate-900 text-white text-[12px] font-bold px-3 py-[6px] rounded-[8px] shadow-xl pointer-events-none whitespace-nowrap z-50 transform -translate-x-1/2 -translate-y-full",
  barChartTooltipArrow: "absolute bottom-[-3px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45",

  // LineChart specific
  lineChartWrapper: "w-full relative",
  lineChartSvg: "h-[320px] w-full",
  lineChartTickText: "fill-slate-400 text-[11px] font-semibold",
  lineChartLabel: "fill-slate-400 text-[11px] font-semibold",
  lineChartTooltip: "absolute bg-slate-900 text-white text-[12px] font-bold px-3 py-[6px] rounded-[8px] shadow-xl pointer-events-none whitespace-nowrap z-50 transform -translate-x-1/2 -translate-y-full",
  lineChartTooltipArrow: "absolute bottom-[-3px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45",

  // StatusPanel specific
  statusPanelContainerFlex: "flex flex-col items-center",
  statusDonutWrapper: "relative w-52 h-52 rounded-full flex items-center justify-center shrink-0 shadow-sm",
  statusDonutInner: "absolute inset-x-0 inset-y-0 m-[22px] bg-white rounded-full flex flex-col items-center justify-center shadow-inner",
  statusTotalNumber: "text-4xl font-extrabold text-slate-900",
  statusTotalLabel: "text-[13px] font-semibold text-slate-500 mt-1",
  statusLegendList: "w-full mt-10 space-y-4",
  statusLegendItem: "flex justify-between items-center text-[14px]",
  statusLegendLeft: "flex items-center gap-3",
  statusColorSwatch: "w-3.5 h-3.5 rounded-full shadow-sm",
  statusLegendLabel: "font-semibold text-slate-700",
  statusLegendRight: "flex gap-4",
  statusLegendValue: "text-slate-900 font-bold",
  statusLegendPercent: "text-slate-400 w-[50px] text-right font-medium",

};
export const paymentsPageStyles = {
  // Layout
  mainGrid: "grid gap-8 lg:grid-cols-[1fr_1fr]",
  leftColumn: "space-y-6",
  rightColumn: "space-y-6",

  // Top area left
  leftTopArea: "flex items-start justify-between",
  pageLabel:
    "text-xs font-bold uppercase tracking-[0.2em] text-[#7D57F5]",
  mainHeading:
    "mt-2 text-[28px] md:text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#0D0E2A]",
  gradientEarnings:
    "bg-gradient-to-b from-[#A7F3D0] via-[#34D399] to-[#059669] bg-clip-text text-transparent custom-brand-font text-[32px] md:text-[42px] relative top-0 md:top-1 pr-1",
  subText: "mt-2 max-w-md text-sm text-slate-500",
  illustrationContainer:
    "hidden lg:block h-48 w-48 flex-shrink-0",
  illustrationImg:
    "w-full h-full object-contain drop-shadow-sm",

  // Wallet cards grid
  walletCardsGrid: "grid gap-4 sm:grid-cols-3",
  walletCard:
    "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",
  walletCardHeader: "flex items-center gap-2.5",
  walletIconBoxAvailable:
    "flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100",
  walletIconBoxEarned:
    "flex h-9 w-9 items-center justify-center rounded-xl bg-[#EBE4FF]",
  walletIconBoxPending:
    "flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100",
  walletCardLabel: "text-xs font-medium text-slate-500",
  walletAmount: "mt-3 text-2xl font-bold text-slate-900",
  paidOutText: "mt-1.5 text-xs text-slate-400",

  // Withdraw section
  withdrawSection:
    "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",
  withdrawTitle: "flex items-center gap-2 text-lg font-bold text-slate-900",
  withdrawIcon: "h-5 w-5 text-[#7D57F5]",
  withdrawForm: "mt-4 flex flex-col gap-3 sm:flex-row",
  withdrawInputContainer: "relative flex-1",
  withdrawInputIcon:
    "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400",
  withdrawInput:
    "w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#7D57F5] focus:ring-2 focus:ring-[#7D57F5]/20",
  requestButton:
    "flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#CBB8FF] via-[#9B7BFF] to-[#7D57F5] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity disabled:opacity-60",
  requestButtonIcon: "h-4 w-4",
  withdrawWarning: "mt-3 text-sm text-slate-500",

  // Payout details
  payoutDetailsSection:
    "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
  payoutTitle: "flex items-center gap-2 text-lg font-bold text-slate-900",
  payoutTitleIcon: "h-5 w-5 text-[#7D57F5]",
  payoutDescription: "mt-1.5 text-sm text-slate-500",
  payoutForm: "mt-5 space-y-4",
  inputLabel: "block text-sm font-medium text-slate-700",
  textInput:
    "mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#7D57F5] focus:ring-2 focus:ring-[#7D57F5]/20",
  payoutGridTwoCol: "grid gap-4 sm:grid-cols-2",
  saveButton:
    "flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#CBB8FF] via-[#9B7BFF] to-[#7D57F5] px-5 py-3.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity disabled:opacity-60",
  saveIcon: "h-4 w-4",
  messageBox:
    "rounded-xl bg-[#F4F0FF] p-4 text-sm text-[#7D57F5]",

  // Recent activity
  recentActivitySection:
    "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
  recentActivityHeader:
    "flex items-center justify-between gap-4",
  recentActivityTitle:
    "flex items-center gap-2 text-lg font-bold text-slate-900",
  recentActivityTitleIcon: "h-5 w-5 text-[#7D57F5]",
  bookingsLink:
    "flex items-center gap-1 text-sm font-semibold text-[#7D57F5] hover:text-[#6C47FF]",
  bookingsLinkIcon: "h-3.5 w-3.5",
  transactionList: "mt-4 space-y-2",
  transactionItem:
    "flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-3.5",
  transactionLeft: "flex items-center gap-3",
  transactionIconBoxPositive:
    "flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600",
  transactionIconBoxNegative:
    "flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100 text-rose-600",
  transactionLabel: "text-sm text-slate-700",
  transactionAmountPositive:
    "text-sm font-semibold text-emerald-600",
  transactionAmountNegative:
    "text-sm font-semibold text-rose-600",
  emptyText: "text-sm text-slate-500",
};

export const profilePageStyles = {
  // Layout
  pageLayout:
    "mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12",

  // Left column
  leftColumn: "flex flex-col gap-6",

  // Header & Illustration
  headerRow: "flex items-start justify-between",
  headerTextBlock: "pt-2",
  profileLabel:
    "text-[11px] font-bold uppercase tracking-[0.2em] text-[#8b5cf6] mb-4",
  mainHeading:
    "text-[32px] md:text-[40px] font-extrabold leading-[1.1] tracking-tight text-[#0D0E2A]",
  headingGradientPublic:
    "bg-gradient-to-b from-[#CBB8FF] via-[#9B7BFF] to-[#7D57F5] bg-clip-text text-transparent custom-brand-font",
  headingGradientBooking:
    "bg-gradient-to-r from-[#11122F] via-[#261E66] to-[#171A3E] bg-clip-text text-transparent custom-brand-font",
  headingGradientBookingInner:
    "bg-gradient-to-r from-[#191A44] via-[#3B2E95] to-[#0F172A] bg-clip-text text-transparent custom-brand-font",
  subHeading:
    "mt-4 text-slate-500 text-[15px] font-medium max-w-sm leading-relaxed",
  illustrationContainer:
    "w-50 h-36 rounded-3xl flex items-center justify-center self-end -mr-4 lg:mr-0 relative overflow-hidden",
  illustrationImg:
    "w-full h-full object-contain drop-shadow-sm",

  // Public link card
  linkCard:
    "bg-white rounded-[20px] border border-slate-200 p-6 shadow-sm",
  linkCardTitle:
    "text-[13px] font-semibold text-slate-700 mb-3",
  linkRow:
    "flex flex-col sm:flex-row items-stretch sm:items-center gap-3",
  linkBar:
    "flex flex-1 items-center justify-between border border-slate-200 bg-[#fafafa] rounded-xl px-4 py-3.5 overflow-hidden",
  linkText:
    "text-[13px] sm:text-[14px] font-medium text-slate-800 break-all line-clamp-1",
  linkCopyButtonSmall:
    "text-slate-400 hover:text-slate-700 focus:outline-none ml-2 transition-colors",
  linkCopyButtonMain:
    "flex items-center gap-2 bg-[#09090b] hover:bg-slate-800 text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap shadow-sm",
  iconSmall: "h-4 w-4",
  linkLiveIndicator:
    "flex items-center gap-2 mt-4 text-[13px] font-medium text-emerald-600",

  // Integrations grid
  integrationsGrid: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4",
  integrationCard:
    "bg-white rounded-[18px] border border-slate-200 p-5 shadow-sm text-center sm:text-left flex flex-col min-h-[178px]",
  integrationHeader:
    "flex items-center justify-center sm:justify-start gap-3 mb-4",
  integrationLogoBox:
    "w-9 h-9 rounded-lg flex items-center justify-center bg-white shadow-sm overflow-hidden border border-slate-100",
  integrationLogoImg:
    "w-[120%] h-[120%] object-contain",
  integrationLabel:
    "text-[13px] font-semibold text-slate-500",
  integrationStatusConfigured:
    "text-[15px] font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-2 mb-2",
  integrationStatusConnected:
    "text-[15px] font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-2 mb-2",
  integrationCheckIcon:
    "w-4 h-4 text-emerald-500 fill-emerald-50",
  integrationDesc:
    "text-[13px] text-slate-500 mb-5 flex-grow leading-relaxed",
  integrationInfoPill:
    "mt-auto flex min-h-10 w-full items-center justify-center rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5 text-[12px] font-semibold text-slate-600 sm:justify-start",
  integrationManageButton:
    "mt-auto min-h-10 w-full flex items-center justify-center py-2.5 rounded-xl border border-indigo-100 text-indigo-600 text-[13px] font-semibold bg-indigo-50/50 hover:bg-indigo-50 transition-colors disabled:opacity-60",
  integrationManageButtonWithIcon:
    "flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-indigo-100 text-indigo-600 text-[13px] font-semibold bg-indigo-50/50 hover:bg-indigo-50 transition-colors disabled:opacity-60",
  integrationBtnIcon: "w-3.5 h-3.5",

  // Right column form
  rightColumn:
    "bg-white rounded-[24px] border border-slate-200 p-8 shadow-sm",
  formHeader: "flex items-center gap-4 mb-8",
  formHeaderIcon:
    "w-12 h-12 rounded-2xl bg-[#f5f3ff] flex items-center justify-center shadow-inner",
  formHeaderUserIcon: "w-6 h-6 text-[#7c3aed]",
  formTitle: "text-[18px] font-extrabold text-slate-900",
  formSubtitle: "text-[13px] text-slate-500 font-medium",
  form: "flex flex-col gap-6",

  inputLabel:
    "block text-[13px] font-bold text-slate-700 mb-2",
  inputWrapper: "relative",
  textInput:
    "w-full rounded-xl border border-slate-200 bg-[#fafafa] px-4 py-3.5 text-[14px] text-slate-900 font-medium placeholder-slate-400 outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] focus:bg-white transition-all hover:border-slate-300",
  inputIconRight:
    "w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none",
  textareaInput:
    "w-full rounded-xl border border-slate-200 bg-[#fafafa] px-4 py-3.5 text-[14px] text-slate-900 font-medium placeholder-slate-400 outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] focus:bg-white resize-none transition-all hover:border-slate-300",
  twoColGrid: "grid grid-cols-1 sm:grid-cols-2 gap-5",

  // Select input with left icon
  inputIconLeft:
    "w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none",
  selectInput:
    "w-full appearance-none rounded-xl border border-slate-200 bg-[#fafafa] pl-10 pr-4 py-3.5 text-[14px] text-slate-900 font-medium outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] focus:bg-white transition-all hover:border-slate-300",

  // Color input
  colorInputRow:
    "flex items-center gap-3 rounded-xl border border-slate-200 px-3.5 py-2.5 bg-[#fafafa] outline-none focus-within:border-[#7c3aed] focus-within:ring-1 focus-within:ring-[#7c3aed] focus-within:bg-white transition-all hover:border-slate-300",
  colorPicker:
    "w-8 h-8 rounded-md cursor-pointer border-0 bg-transparent p-0 flex-shrink-0",
  colorTextInput:
    "text-[14px] font-semibold text-slate-800 w-full outline-none uppercase bg-transparent",

  // Theme swatches
  themeSwatches: "flex flex-wrap gap-2.5",
  themeSwatch: "w-3 h-3 rounded-full shadow-inner",
  themeBtnActive:
    "flex items-center gap-2 px-4 py-2.5 text-[13px] font-bold rounded-xl border transition-all bg-[#09090b] text-white border-[#09090b] shadow-md",
  themeBtnInactive:
    "flex items-center gap-2 px-4 py-2.5 text-[13px] font-bold rounded-xl border transition-all bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50",

  // Save button
  saveButton:
    "mt-4 flex items-center justify-center gap-2 w-full py-4 rounded-[14px] bg-[#09090b] hover:bg-slate-800 text-white text-[15px] font-bold transition-all shadow-md hover:shadow-lg disabled:opacity-60",
  saveButtonIcon: "w-5 h-5",

  // Message banner
  messageBanner:
    "mt-2 p-3.5 rounded-xl text-[13px] font-bold flex items-center gap-2 justify-center border",
  messageBannerSuccess:
    "bg-emerald-50 text-emerald-700 border-emerald-100",
  messageBannerError:
    "bg-rose-50 text-rose-700 border-rose-100",
  messageBannerIcon: "w-4 h-4",

  // Bottom full width area
  bottomFullWidth:
    "col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-[1.6fr_0.8fr] gap-6 mt-4",

  // Preview block
  previewContainer:
    "flex flex-col relative w-full h-full",

  previewBanner:
    "bg-[var(--brand-panel)] rounded-[24px] overflow-hidden flex flex-col shadow-lg relative pb-28 transition-colors",
  previewBannerBg:
    "absolute top-0 right-0 w-[55%] h-full pointer-events-none z-0",
  previewBannerImg:
    "w-full h-full object-cover object-right opacity-60 mix-blend-screen mask-image-gradient",
  previewBannerOverlay:
    "absolute inset-0 bg-gradient-to-r from-[var(--brand-panel)] via-transparent to-transparent",

  previewBannerContent:
    "p-6 md:p-10 flex-grow relative z-10 w-full mb-6",
  previewAvatarRow:
    "flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-5 mt-2",
  previewAvatar:
    "w-16 h-16 rounded-[18px] bg-[var(--brand-accent)] flex items-center justify-center text-white text-3xl custom-brand-font shadow-sm flex-shrink-0 transition-colors",
  previewLabel:
    "text-[11px] font-extrabold uppercase tracking-widest text-[color:var(--brand-accent)] mb-1.5 opacity-90 transition-colors",
  previewTitle:
    "text-[36px] custom-brand-font text-white tracking-tight",
  previewDesc:
    "text-white/80 text-[15px] font-medium max-w-sm leading-relaxed",

  // Overlapping white feature card
  previewFeatureCard:
    "bg-white rounded-[20px] mx-4 sm:mx-6 -mt-[85px] p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-20 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.1)] border border-slate-100",
  featureItem: "flex items-start gap-3",
  featureIconBox:
    "w-9 h-9 rounded-[10px] bg-[#f5f3ff] flex items-center justify-center flex-shrink-0",
  featureIcon: "w-[18px] h-[18px] text-[#7c3aed]",
  featureTitle: "text-[12px] font-extrabold text-slate-800",
  featureText:
    "text-[11px] text-slate-500 mt-1 leading-snug font-medium pr-1",

  // Customer view section
  customerViewContainer: "flex flex-col",
  customerViewLabel:
    "self-start px-3 py-1 bg-[#f5f3ff] text-[#7c3aed] text-[11px] font-extrabold tracking-wide rounded-full mb-3 ml-2",
  customerViewCard:
    "border text-center border-slate-200 rounded-[24px] p-0 overflow-hidden shadow-sm flex flex-col h-full bg-slate-900 relative",
  customerViewOverlay:
    "absolute top-0 right-0 w-full h-full bg-gradient-to-br pointer-events-none",
  customerViewContent:
    "p-7 relative z-10 flex flex-col items-center flex-grow",
  customerAvatar:
    "w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl custom-brand-font mb-4 mt-2 shadow-sm",
  customerName:
    "text-[26px] custom-brand-font text-white mb-1.5 tracking-tight",
  customerMeta:
    "flex justify-center gap-4 text-[11px] text-white/80 mb-7 font-bold",
  customerMetaItem: "flex items-center gap-1.5",
  customerMetaIcon: "w-3.5 h-3.5",
  customerTimeslotSection:
    "w-full flex flex-col gap-2.5 mt-auto mb-2",
  timeslotLabel:
    "text-white/60 text-[10px] font-bold uppercase tracking-widest text-left ml-1 mb-1",
  timeslotActiveBtn:
    "w-full py-3.5 rounded-[12px] text-white font-bold text-sm shadow-sm transition opacity-100",
  timeslotInactiveBtn:
    "w-full py-3.5 rounded-[12px] border border-white/20 text-white font-bold text-sm hover:bg-white/10 transition",
  customerViewHint:
    "flex items-start gap-2 mt-4 text-[12px] font-medium text-slate-500 px-2 leading-relaxed",
  hintIcon: "w-[18px] h-[18px] flex-shrink-0 mt-0.5 text-slate-400",
};

// Add this export to your assets/dummyStyles.js

export const publicBookingPageStyles = {
  // Page wrapper
  pageContainer:
    "min-h-screen bg-[#f8f9fc] text-slate-900 py-6 md:py-10 px-4 md:px-8",
  mainGrid:
    "mx-auto grid max-w-[1100px] gap-6 lg:gap-10 lg:grid-cols-[0.8fr_1.2fr]",

  // Left panel
  leftPanel:
    "relative flex flex-col bg-[var(--brand-panel)] rounded-[24px] overflow-hidden shadow-xl p-6 md:p-8 lg:p-10 text-white min-h-[500px] transition-colors",
  bgImageContainer:
    "absolute top-0 right-0 w-[80%] h-[280px] pointer-events-none z-0",
  bgImage:
    "w-full h-full object-cover object-right opacity-[0.45] mix-blend-screen mask-image-gradient",
  bgImageOverlay:
    "absolute inset-0 bg-gradient-to-r from-[var(--brand-panel)] via-transparent to-transparent",
  bgFadeOverlay:
    "absolute top-[200px] left-0 w-full h-[150px] bg-gradient-to-b from-transparent to-[var(--brand-panel)] pointer-events-none z-0",
  leftContent: "relative z-10",
  businessInfoRow: "flex items-center gap-4 mb-6",
  businessAvatar:
    "flex h-[48px] w-[48px] items-center justify-center rounded-2xl bg-[var(--brand-accent)] ring-1 ring-white/15 text-[20px] custom-brand-font shadow-sm backdrop-blur-sm transition-colors",
  bookOnlineLabel:
    "text-[11px] font-extrabold uppercase tracking-[0.25em] text-white/70",
  businessName:
    "mt-1 text-[32px] md:text-[44px] custom-brand-font tracking-tight leading-[1]",
  businessDesc:
    "mt-3 text-[14px] leading-relaxed text-white/75 max-w-[280px] font-medium",

  // Service list
  serviceList: "mt-10 space-y-4 relative z-10",
  serviceBtnActive:
    "flex w-full items-center gap-4 rounded-[20px] p-5 text-left transition-all duration-300 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-transparent translate-x-2",
  serviceBtnInactive:
    "flex w-full items-center gap-4 rounded-[20px] p-5 text-left transition-all duration-300 bg-white/5 hover:bg-white/10 border border-white/5 backdrop-blur-md",
  serviceIconBase:
    "h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-white transition-all shadow-sm overflow-hidden",
  serviceTextBlock: "flex-1 pr-2",
  serviceNameActive: "block text-[16px] font-extrabold text-slate-900",
  serviceNameInactive: "block text-[16px] font-extrabold text-white",
  serviceDetailActive: "mt-1 text-[13px] font-semibold text-slate-500",
  serviceDetailInactive: "mt-1 text-[13px] font-semibold text-white/60",
  serviceDescActive:
    "mt-1.5 text-[12px] leading-relaxed line-clamp-2 text-slate-500",
  serviceDescInactive:
    "mt-1.5 text-[12px] leading-relaxed line-clamp-2 text-white/50 font-medium",
  selectorIconBase:
    "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-opacity",

  // Right panel
  rightPanel:
    "bg-white rounded-[24px] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.02)] border border-slate-100 p-6 sm:p-8 lg:p-12",
  bookingTitle:
    "text-[22px] sm:text-[26px] font-extrabold text-slate-900",
  selectedServiceInfo:
    "mt-2.5 flex items-center gap-2 text-[14px] font-bold text-slate-500",
  noServiceText: "mt-2.5 text-[14px] font-medium text-slate-500",
  form: "mt-10 space-y-7",

  // Inputs
  inputLabel: "text-[13px] font-bold text-slate-800",
  inputWrapper: "relative mt-2",
  inputIcon:
    "pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400",
  dateInput:
    "w-full rounded-[14px] border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-[14px] font-bold text-slate-800 outline-none transition focus:ring-1 hover:border-slate-300 shadow-sm",
  textInput:
    "w-full rounded-[14px] border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-[14px] font-bold text-slate-800 outline-none transition hover:border-slate-300 shadow-sm",
  emailInput:
    "w-full rounded-[14px] border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-[14px] font-bold text-slate-800 outline-none transition hover:border-slate-300 shadow-sm",

  // Time slots
  timeSlotGrid: "mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3",
  slotBtnBase:
    "flex items-center justify-center gap-2 rounded-[14px] border py-3.5 text-[14px] font-bold transition-all shadow-sm",
  slotBtnSelected: "border-transparent text-white",
  slotBtnUnselected:
    "border-slate-200 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50",
  noSlotsText:
    "mt-3 text-[13px] font-medium text-slate-500 bg-slate-50 rounded-xl p-4 border border-slate-100",

  // Name / Email grid
  nameEmailGrid: "grid gap-5 sm:grid-cols-2 pt-2",

  // OTP
  otpBlock:
    "rounded-[20px] bg-[#f8f9fc] p-6 border border-slate-100",
  otpLabel: "text-[13px] font-bold text-slate-800",
  otpRow: "mt-3 grid gap-3 sm:grid-cols-[1fr_auto]",
  otpInput:
    "w-full rounded-[14px] border border-slate-200 bg-white px-5 py-3.5 text-[14px] font-bold text-slate-800 tracking-wider outline-none transition hover:border-slate-300 shadow-sm",
  otpButton:
    "rounded-[14px] border border-slate-200 bg-white px-6 py-3.5 text-[13px] font-extrabold text-slate-700 hover:bg-slate-50 disabled:opacity-50 transition-colors shadow-sm",

  // Avatar selector
  avatarGrid: "mt-3 grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-8 gap-3",
  avatarBtnBase:
    "relative flex aspect-square items-center justify-center rounded-full border transition-all overflow-hidden",
  avatarBtnSelected: "ring-2 ring-offset-2",
  avatarBtnUnselected:
    "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50",

  // Notes
  notesTextarea:
    "mt-2 w-full rounded-[14px] border border-slate-200 bg-white px-4 py-3.5 text-[14px] font-medium text-slate-800 outline-none transition hover:border-slate-300 shadow-sm resize-none",

  // Submit
  submitButton:
    "flex w-full items-center justify-center gap-2 rounded-[16px] px-6 py-4 text-[15px] font-extrabold text-white shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:hover:scale-100",
  securePaymentText:
    "mt-4 flex items-center justify-center gap-2 text-[12px] font-bold text-slate-500",

  // Messages
  messageBase:
    "rounded-[16px] p-4 text-[13px] font-bold text-center border",
  messageSuccess:
    "bg-emerald-50 text-emerald-700 border-emerald-100",
  messageInfo:
    "bg-indigo-50 text-indigo-700 border-indigo-100",

  // Calendar link
  calendarLink:
    "block text-center text-[13px] font-extrabold hover:underline",
};

// Add this export to your assets/dummyStyles.js

export const servicesPageStyles = {
  // Layout
  mainGrid: "grid gap-8 lg:grid-cols-[1fr_1fr]",

  // Header (left)
  headerRow: "flex items-start justify-between",
  pageLabel:
    "text-xs font-bold uppercase tracking-[0.2em] text-[#7D57F5]",
  mainHeading:
    "mt-2 text-[28px] md:text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#0D0E2A]",
  gradientText:
    "bg-gradient-to-b from-[#FFA1CF] via-[#FF5C9D] to-[#E11D48] bg-clip-text text-transparent custom-brand-font text-[32px] md:text-[42px] relative top-0 md:top-1 ml-1 md:ml-2",
  subText:
    "mt-2 max-w-md text-[13px] md:text-sm text-slate-500",
  illustrationContainer:
    "hidden lg:block h-48 w-48 flex-shrink-0",
  illustrationImg:
    "w-full h-full object-contain drop-shadow-sm",

  // Form card
  formCard:
    "mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
  formTitle: "flex items-center gap-2 text-lg font-bold text-slate-900",
  formTitleIcon: "h-5 w-5 text-[#7D57F5]",
  formGrid: "mt-5 grid gap-4",

  // Inputs
  inputLabel: "text-sm font-medium text-slate-700",
  inputWrapper: "relative mt-1.5",
  inputIcon:
    "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400",
  textInput:
    "w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#7D57F5] focus:ring-2 focus:ring-[#7D57F5]/20",

  durationPriceGrid: "grid gap-4 sm:grid-cols-2",
  selectInput:
    "w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#7D57F5] focus:ring-2 focus:ring-[#7D57F5]/20",
  priceInput:
    "w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#7D57F5] focus:ring-2 focus:ring-[#7D57F5]/20",

  textareaWrapper: "relative mt-1.5",
  textareaIcon:
    "pointer-events-none absolute left-4 top-3.5 h-4 w-4 text-slate-400",
  textareaInput:
    "w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#7D57F5] focus:ring-2 focus:ring-[#7D57F5]/20",

  // Icon selection
  iconGrid: "mt-3 grid grid-cols-4 gap-2 md:gap-3 sm:grid-cols-4 lg:grid-cols-8",
  iconBtnActive:
    "relative flex aspect-square items-center justify-center rounded-xl border transition-all overflow-hidden border-[#7D57F5] bg-[#F4F0FF] ring-2 ring-[#7D57F5]/20",
  iconBtnInactive:
    "relative flex aspect-square items-center justify-center rounded-xl border transition-all overflow-hidden border-slate-200 bg-white hover:border-[#7D57F5]/50 hover:bg-slate-50",
  iconImg: "h-full w-full object-cover",

  // Form actions
  formActions: "mt-5 flex items-center gap-3",
  submitButton:
    "flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#CBB8FF] via-[#9B7BFF] to-[#7D57F5] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity disabled:opacity-60",
  submitIcon: "h-4 w-4",
  cancelButton:
    "flex items-center gap-1.5 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50",
  cancelIcon: "h-4 w-4",

  // Message
  message:
    "mt-4 rounded-xl bg-[#F4F0FF] p-3 text-sm text-[#7D57F5]",

  // Right section
  rightSection:
    "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
  rightTitle: "flex items-center gap-2 text-lg font-bold text-slate-900",
  rightTitleIcon: "h-5 w-5 text-[#7D57F5]",
  serviceList: "mt-5 space-y-3",

  // Empty state
  emptyState:
    "flex flex-col items-center justify-center rounded-2xl bg-slate-50 py-10",
  emptyIcon: "h-10 w-10 text-slate-300",
  emptyText: "mt-3 text-sm text-slate-500",

  // Service card
  serviceCard:
    "rounded-2xl border border-slate-200 p-4 transition hover:shadow-sm",
  serviceCardInner:
    "flex flex-col sm:flex-row sm:items-start justify-between gap-4",
  serviceInfoRow: "flex items-start gap-3 w-full",
  serviceIconContainer:
    "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white overflow-hidden",
  serviceIconImg: "h-full w-full object-cover",
  serviceTextBlock: "flex-1 min-w-0 pr-2",
  serviceName: "font-semibold text-slate-900 truncate",
  serviceDetail: "mt-0.5 text-sm text-slate-500",
  serviceDesc: "mt-1.5 text-sm text-slate-500",

  serviceActions:
    "flex flex-shrink-0 items-center gap-1.5 self-end sm:self-auto ml-14 sm:ml-0",
  visibilityBadgeActive:
    "flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold bg-emerald-50 text-emerald-700",
  visibilityBadgeInactive:
    "flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold bg-slate-100 text-slate-500",
  editButton:
    "rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600",
  deleteButton:
    "rounded-lg p-2 text-slate-400 hover:bg-rose-50 hover:text-rose-600",
};



export const adminLoginPageStyles = {
  // Page wrapper
  pageContainer:
    "mx-auto min-h-screen bg-[#fafafa] flex items-center justify-center px-4 py-6 sm:p-6 text-slate-800 tracking-tight font-sans",

  // Main card
  card:
    "w-full max-w-5xl bg-white rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] border border-slate-100 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row",

  // Left decorative panel
  leftPanel:
    "lg:w-5/12 bg-gradient-to-br from-[#f5eeff] via-[#f7f0fe] to-[#eff4ff] p-6 sm:p-8 lg:p-10 flex flex-col relative overflow-hidden",
  leftContent:
    "z-10 relative flex-1 flex flex-col justify-center",
  leftEyebrow:
    "text-[13px] font-bold uppercase tracking-[0.15em] text-[#7D57F5] mb-3",
  leftLogoRow: "flex items-center gap-2 mb-4",
  leftLogoImg: "h-10 w-auto",
  leftHeading:
    "text-[30px] sm:text-[38px] leading-[1.1] font-extrabold text-[#0D0E2A] mb-4",
  leftHeadingAccent:
    "text-[#FF5C9D] custom-brand-font text-[36px] sm:text-[44px]",
  leftDescription:
    "text-[14px] font-medium text-slate-500 leading-relaxed max-w-full lg:max-w-[280px]",

  // Right panel
  rightPanel: "lg:w-7/12 p-6 sm:p-8 md:p-10 lg:p-14",
  formTitle: "text-[22px] sm:text-[24px] font-extrabold text-slate-900",
  formSubtitle: "text-[14px] text-slate-500 font-medium mt-1.5",

  // Message box
  messageBox:
    "mt-6 p-4 rounded-[12px] bg-[#fdf2f8] text-[#db2777] text-[13px] font-bold border border-[#fce7f3]",

  // Form
  form: "mt-8 space-y-5",
  inputLabel: "block text-[13px] font-bold text-slate-700 mb-2",
  textInput:
    "w-full rounded-[14px] border border-slate-200 px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#7D57F5] focus:border-transparent transition-shadow text-[14px] font-medium",

  // Submit button
  submitButton:
    "w-full rounded-full bg-gradient-to-b from-[#CBB8FF] via-[#9B7BFF] to-[#7D57F5] px-5 py-3.5 text-[15px] font-bold text-white shadow-sm hover:shadow-md hover:bg-gradient-to-b from-[#CBB8FF] via-[#9B7BFF] to-[#7D57F5] transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2",
};

export const adminDashboardPageStyles = {
  // Page
  pageContainer:
    'min-h-screen bg-[#fafafa] text-slate-800 tracking-tight font-sans',

  // Header
  header:
    'border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50',
  headerInner:
    'mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-5 md:flex-row md:items-center md:justify-between',
  logoRow: 'flex min-w-0 items-center gap-2',
  logoImg: 'h-8 md:h-10 w-auto',
  logoText:
    'text-[22px] md:text-[26px] font-extrabold text-[#0D0E2A] mt-1 md:mt-2 custom-brand-font tracking-tight',
  logoAccent: 'text-[#FF5C9D]',
  headerActions: 'flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center md:w-auto md:justify-end',
  clientAppLink:
    'w-full rounded-full bg-white border border-slate-200 px-5 py-2 text-center text-[13px] font-bold text-slate-700 hover:bg-slate-50 shadow-sm transition-all sm:w-auto',
  logoutButton:
    'w-full rounded-full bg-slate-900 px-5 py-2 text-[13px] font-bold text-white hover:bg-slate-800 shadow-sm transition-all sm:w-auto',

  // Main
  main: 'mx-auto w-full max-w-7xl px-4 py-6 space-y-6 sm:px-5 sm:py-8 lg:py-10 lg:space-y-8',

  // Hero
  heroSection: 'flex flex-col gap-4 md:flex-row md:items-end md:justify-between',
  heroTitle:
    'text-[28px] sm:text-[32px] md:text-[38px] font-extrabold text-slate-900 tracking-tight leading-[1.05]',
  heroTitleAccent:
    'bg-gradient-to-b from-[#FFA1CF] via-[#FF5C9D] to-[#E11D48] bg-clip-text text-transparent custom-brand-font text-[34px] sm:text-[36px] md:text-[44px] relative top-1 ml-1 md:ml-2',
  heroSubtitle: 'mt-1.5 text-[15px] font-medium text-slate-500',
  messageBanner:
    'w-full rounded-[14px] border border-emerald-100 bg-emerald-50 px-4 py-3 text-[13px] font-bold text-emerald-700 shadow-sm md:w-auto',

  // Stats
  statsGrid:
    'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-5 mt-6 lg:mt-8',
  statCard:
    'rounded-[18px] sm:rounded-[24px] border border-slate-100 bg-white p-4 sm:p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] flex flex-col gap-3',
  statIconContainer:
    'w-[40px] h-[40px] rounded-[12px] flex items-center justify-center',
  statIcon: 'w-[20px] h-[20px]',
  statLabel: 'text-[12px] font-bold text-slate-500 mb-1',
  statValue: 'text-[22px] font-extrabold text-slate-900 tracking-tight',

  // Individual stat backgrounds and colors (index-based)
  statBg1: 'bg-[#F4F0FF]',
  statColor1: 'text-[#7D57F5]',
  statBg2: 'bg-[#eafbef]',
  statColor2: 'text-[#16a34a]',
  statBg3: 'bg-[#f3e8ff]',
  statColor3: 'text-[#8b5cf6]',
  statBg4: 'bg-[#eff6ff]',
  statColor4: 'text-[#2563eb]',
  statBg5: 'bg-[#d1fae5]',
  statColor5: 'text-[#059669]',
  statBg6: 'bg-[#ffedd5]',
  statColor6: 'text-[#ea580c]',

  // Tables layout
  tablesGrid:
    'grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-5 lg:gap-6 mt-6 lg:mt-8',

  // Common table components
  tableCard:
    'min-w-0 rounded-[18px] sm:rounded-[24px] border border-slate-100 bg-white p-4 sm:p-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col',
  tableHeader: 'flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-5 sm:mb-6',
  tableTitle:
    'text-[16px] sm:text-[18px] font-extrabold text-slate-900 flex items-center gap-2',
  tableTitleIcon: 'w-5 h-5 text-[#7D57F5]', // default; overridden per usage if needed
  sectionTitleSpacing: 'mb-5 sm:mb-6',

  tableScrollContainer: 'flex-1 overflow-x-auto',
  table: 'w-full min-w-[640px] md:min-w-[700px] text-left',
  tableHeadRow: 'border-b border-slate-100',
  th: 'py-3 px-4 text-[12px] font-bold text-slate-400 uppercase tracking-wider',
  tbody: 'divide-y divide-slate-50',
  tr: 'hover:bg-slate-50/50 transition-colors',
  td: 'py-4 px-4',
  tdBold: 'py-4 px-4 font-bold text-slate-900 text-[13px]',
  tdMuted: 'py-4 px-4 text-[13px] font-medium text-slate-500',
  tdFees: 'py-4 px-4 text-[13px] font-bold text-[#7D57F5]',
  tdEarnings: 'py-4 px-4 text-[13px] font-bold text-[#16a34a]',
  emptyTableCell: 'py-8 text-center text-[13px] font-medium text-slate-400',

  // User table
  userBusinessName: 'font-bold text-slate-900 text-[14px]',
  payoutStatusBadge:
    'inline-flex px-2.5 py-1 rounded-[6px] text-[11px] font-bold',
  userPayoutReady: 'bg-[#eafbef] text-[#16a34a]',
  userPayoutPending: 'bg-[#fff1f2] text-[#e11d48]',

  // Withdrawals
  withdrawalCard:
    'min-w-0 rounded-[18px] sm:rounded-[24px] border border-slate-100 bg-white p-4 sm:p-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] flex flex-col',
  withdrawalList: 'flex-1 space-y-4 overflow-y-auto pr-0 sm:pr-2 custom-scrollbar max-h-none xl:max-h-[500px]',
  withdrawalItem:
    'rounded-[16px] bg-[#fafafa] border border-slate-100 p-4 sm:p-5 group hover:border-[#605bff]/30 transition-colors',
  withdrawalItemHeader: 'flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4',
  withdrawalProviderName: 'font-bold text-slate-900 text-[14.5px]',
  withdrawalProviderEmail: 'text-[12px] font-medium text-slate-500',
  withdrawalAmountCol: 'text-left sm:text-right',
  withdrawalAmount: 'text-[16px] font-extrabold text-slate-900',
  withdrawalStatusWrap: 'mt-1',
  withdrawalStatusBadge:
    'inline-flex px-2 py-0.5 rounded-[6px] text-[10px] font-bold uppercase tracking-wider',
  withdrawalStatusColors: {
    processing: 'bg-[#ffedd5] text-[#ea580c]',
    paid: 'bg-[#eafbef] text-[#16a34a]',
    rejected: 'bg-[#fff1f2] text-[#e11d48]',
  },
  withdrawalStatusDefault: 'bg-slate-100 text-slate-600',

  withdrawalAccountInfo:
    'mt-3 bg-white border border-slate-100 p-2.5 rounded-[12px] text-[12px] font-medium text-slate-600 flex items-start sm:items-center gap-2 break-words',
  withdrawalAccountIcon: 'w-3.5 h-3.5 shrink-0 text-slate-400',
  withdrawalActions: 'mt-4 flex flex-wrap gap-2',
  withdrawalActionBtn:
    'min-w-[92px] flex-1 rounded-[10px] py-2 text-[12px] font-bold capitalize transition-all disabled:opacity-50 disabled:cursor-not-allowed',
  withdrawalActionBtnActive: 'bg-slate-200 text-slate-800 shadow-inner',
  withdrawalActionBtnInactive:
    'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50',

  // Withdrawal confirmation modal
  confirmModalOverlay:
    'fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/45 px-4 py-6 backdrop-blur-sm',
  confirmModal:
    'w-full max-w-md rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_-24px_rgba(15,23,42,0.45)]',
  confirmModalIconRow: 'flex items-center justify-between gap-3',
  confirmModalIconWrap:
    'flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#F4F0FF] text-[#7D57F5]',
  confirmModalIcon: 'h-5 w-5',
  confirmModalTitle: 'mt-5 text-[20px] font-extrabold text-slate-900',
  confirmModalText: 'mt-2 text-[14px] font-medium leading-6 text-slate-500',
  confirmModalMeta:
    'mt-5 flex items-center justify-between gap-4 rounded-[14px] border border-slate-100 bg-slate-50 px-4 py-3 text-[13px] font-bold text-slate-600',
  confirmModalActions: 'mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end',
  confirmModalCancelBtn:
    'rounded-[12px] border border-slate-200 bg-white px-5 py-2.5 text-[13px] font-bold text-slate-600 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60',
  confirmModalConfirmBtn:
    'rounded-[12px] bg-slate-900 px-5 py-2.5 text-[13px] font-bold text-white shadow-sm transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60',

  // Empty withdrawals
  emptyWithdrawals:
    'py-10 flex flex-col items-center justify-center text-center',
  emptyWithdrawalsIconCircle:
    'w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-3',
  emptyWithdrawalsIcon: 'w-6 h-6 text-slate-300',
  emptyWithdrawalsText: 'text-[14px] font-medium text-slate-400',

  // Recent bookings
  recentBookingsCard:
    'mt-6 lg:mt-8 min-w-0 rounded-[18px] sm:rounded-[24px] border border-slate-100 bg-white p-4 sm:p-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)]',
  bookingPayoutBadge:
    'inline-flex px-2 py-1 rounded-[6px] text-[10px] font-bold bg-[#eafbef] text-[#16a34a] uppercase tracking-wider',
};
