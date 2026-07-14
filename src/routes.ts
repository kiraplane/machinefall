import { websiteConfig } from './config/website';

export enum Routes {
  Root = '/',
  CookiePolicy = '/cookie',
  PrivacyPolicy = '/privacy',
  TermsOfService = '/terms',
  Disclaimer = '/disclaimer',

  Guides = '/guides',
  BeginnerGuide = '/guides/beginner-guide',
  DepotsLogistics = '/guides/depots-logistics',
  WorkersCarts = '/guides/workers-carts',
  BaseDefense = '/guides/base-defense',
  TechnologyEras = '/guides/technology-eras',
  ArmyFormations = '/guides/army-formations',
  LairsWorldMap = '/guides/lairs-world-map',
  BossPreparation = '/guides/boss-preparation',
  NavalTransport = '/guides/naval-transport',
  CitiesRefugeeCamps = '/guides/cities-refugee-camps',
  SystemRequirements = '/system-requirements',
  Review = '/review',
  Download = '/download',

  Login = '/auth/login',
  Register = '/auth/register',
  AuthError = '/auth/error',
  ForgotPassword = '/auth/forgot-password',
  ResetPassword = '/auth/reset-password',
  Dashboard = '/dashboard',
  AdminUsers = '/admin/users',
  AdminTestCreditPackage = '/admin/test-credit-package',
  SettingsProfile = '/settings/profile',
  SettingsBilling = '/settings/billing',
  SettingsCredits = '/settings/credits',
  SettingsSecurity = '/settings/security',
  SettingsNotifications = '/settings/notifications',
  Payment = '/payment',
}

export const routesNotAllowedByLoggedInUsers: Routes[] = [];
export const protectedRoutes: Routes[] = [];
export const DEFAULT_LOGIN_REDIRECT =
  websiteConfig.routes.defaultLoginRedirect ?? Routes.Dashboard;
