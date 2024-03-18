import { lazy } from "react";

const PagesRoutes = [
  // ADMIN

  {
    path: "/usuarios",
    component: lazy(() => import("../../view/apps/admin/usuarios")),
    layout: "HorizontalLayout",
  },
  {
    path: "/paquetes",
    component: lazy(() => import("../../view/apps/admin/paquetes")),
    layout: "HorizontalLayout",
  },
  {
    path: "/facturas",
    component: lazy(() => import("../../view/apps/admin/facturas")),
    layout: "HorizontalLayout",
  },
  {
    path: "/documents",
    component: lazy(() => import("../../view/apps/documents")),
    layout: "VerticalLayout",
  },
  {
    path: "/retiros",
    component: lazy(() => import("../../view/apps/admin/retiros")),
    layout: "HorizontalLayout",
  },
  {
    path: "/documentos",
    component: lazy(() => import("../../view/apps/admin/documentos")),
    layout: "HorizontalLayout",
  },

  {
    path: "/bonos",
    component: lazy(() => import("../../view/apps/admin/bonos")),
    layout: "HorizontalLayout",
  },
  
  {
    path: "/rangos",
    component: lazy(() => import("../../view/apps/admin/rangos")),
    layout: "HorizontalLayout",
  },
  // COMPONENTS
  {
    path: "/components/components-page",
    component: lazy(() => import("../../view/components/components-page")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/avatar",
    component: lazy(() => import("../../view/components/data-display/avatar")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/badge",
    component: lazy(() => import("../../view/components/data-display/badge")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/calendar",
    component: lazy(() =>
      import("../../view/components/data-display/calendar")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/card",
    component: lazy(() => import("../../view/components/data-display/card")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/collapse",
    component: lazy(() =>
      import("../../view/components/data-display/collapse")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/comment",
    component: lazy(() => import("../../view/components/data-display/comment")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/empty",
    component: lazy(() => import("../../view/components/data-display/empty")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/list",
    component: lazy(() => import("../../view/components/data-display/list")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/popover",
    component: lazy(() => import("../../view/components/data-display/popover")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/table",
    component: lazy(() => import("../../view/components/data-display/table")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/tabs",
    component: lazy(() => import("../../view/components/data-display/tabs")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/tag",
    component: lazy(() => import("../../view/components/data-display/tag")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/timeline",
    component: lazy(() =>
      import("../../view/components/data-display/timeline")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/tooltip",
    component: lazy(() =>
      import("../../view/components/data-display/tooltip")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/checkbox",
    component: lazy(() => import("../../view/components/data-entry/checkbox")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/datepicker",
    component: lazy(() =>
      import("../../view/components/data-entry/datepicker")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/form",
    component: lazy(() => import("../../view/components/data-entry/form")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/inputs",
    component: lazy(() => import("../../view/components/data-entry/inputs")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/input-number",
    component: lazy(() =>
      import("../../view/components/data-entry/input-number")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/radio",
    component: lazy(() =>
      import("../../view/components/data-entry/radio")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/rate",
    component: lazy(() => import("../../view/components/data-entry/rate")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/select",
    component: lazy(() => import("../../view/components/data-entry/select")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/slider",
    component: lazy(() => import("../../view/components/data-entry/slider")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/switch",
    component: lazy(() => import("../../view/components/data-entry/switch")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/upload",
    component: lazy(() => import("../../view/components/data-entry/upload")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/feedback/alert",
    component: lazy(() => import("../../view/components/feedback/alert")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/feedback/drawer",
    component: lazy(() => import("../../view/components/feedback/drawer")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/feedback/message",
    component: lazy(() => import("../../view/components/feedback/message")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/feedback/modal",
    component: lazy(() => import("../../view/components/feedback/modal")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/feedback/notification",
    component: lazy(() =>
      import("../../view/components/feedback/notification")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/components/feedback/popconfirm",
    component: lazy(() => import("../../view/components/feedback/popconfirm")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/feedback/progress",
    component: lazy(() => import("../../view/components/feedback/progress")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/feedback/result",
    component: lazy(() => import("../../view/components/feedback/result")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/feedback/skeleton",
    component: lazy(() => import("../../view/components/feedback/skeleton")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/general/buttons",
    component: lazy(() => import("../../view/components/general/buttons")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/general/icons",
    component: lazy(() => import("../../view/components/general/icons")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/general/style-guide",
    component: lazy(() => import("../../view/components/general/style-guide")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/navigation/breadcrumb",
    component: lazy(() =>
      import("../../view/components/navigation/breadcrumb")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/components/navigation/dropdown",
    component: lazy(() => import("../../view/components/navigation/dropdown")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/navigation/menu",
    component: lazy(() => import("../../view/components/navigation/menu")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/navigation/pagination",
    component: lazy(() =>
      import("../../view/components/navigation/pagination")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/components/navigation/steps",
    component: lazy(() => import("../../view/components/navigation/steps")),
    layout: "VerticalLayout",
  },

  // MAIN
  {
    path: "/main/dashboard/analytics",
    component: lazy(() => import("../../view/main/dashboard/analytics")),
    layout: "VerticalLayout",
  },
  {
    path: "/main/dashboard/nft",
    component: lazy(() => import("../../view/main/dashboard/nft")),
    layout: "VerticalLayout",
  },
  {
    path: "/main/dashboard/ecommerce",
    component: lazy(() => import("../../view/main/dashboard/ecommerce")),
    layout: "VerticalLayout",
  },
  {
    path: "/admin",
    component: lazy(() => import("../../view/main/dashboard/admin")),
    layout: "VerticalLayout",
  },
  {
    path: "/main/widgets/cards/advance",
    component: lazy(() => import("../../view/main/widgets/cards/advance")),
    layout: "VerticalLayout",
  },
  {
    path: "/main/widgets/cards/analytics",
    component: lazy(() => import("../../view/main/widgets/cards/analytics")),
    layout: "VerticalLayout",
  },
  {
    path: "/main/widgets/cards/statistics",
    component: lazy(() => import("../../view/main/widgets/cards/statistics")),
    layout: "VerticalLayout",
  },
  {
    path: "/main/widgets/selectbox",
    component: lazy(() => import("../../view/main/widgets/selectbox")),
    layout: "VerticalLayout",
  },
  {
    path: "/main/widgets/illustration-set",
    component: lazy(() => import("../../view/main/widgets/illustration-set")),
    layout: "VerticalLayout",
  },
  {
    path: "/main/widgets/crypto-icons",
    component: lazy(() => import("../../view/main/widgets/crypto-icons")),
    layout: "VerticalLayout",
  },
  {
    path: "/main/widgets/user-icons",
    component: lazy(() => import("../../view/main/widgets/user-icons")),
    layout: "VerticalLayout",
  },
  {
    path: "/main/widgets/flags",
    component: lazy(() => import("../../view/main/widgets/flags")),
    layout: "VerticalLayout",
  },
  {
    path: "/main/widgets/charts",
    component: lazy(() => import("../../view/main/widgets/charts")),
    layout: "VerticalLayout",
  },
  {
    path: "/main/layouts/divider",
    component: lazy(() => import("../../view/main/layouts/divider")),
    layout: "VerticalLayout",
  },
  {
    path: "/main/layouts/grid-system",
    component: lazy(() => import("../../view/main/layouts/grid-system")),
    layout: "VerticalLayout",
  },
  {
    path: "/main/layouts/page-layouts/boxed-layout",
    component: lazy(() => import("../../view/main/layouts/page-layouts/boxed")),
    layout: "VerticalLayout",
  },
  {
    path: "/main/layouts/page-layouts/vertical-layout",
    component: lazy(() => import("../../view/main/layouts/page-layouts/vertical")),
    layout: "VerticalLayout",
  },
  {
    path: "/main/layouts/page-layouts/horizontal-layout",
    component: lazy(() => import("../../view/main/layouts/page-layouts/horizontal")),
    layout: "HorizontalLayout",
  },
  {
    path: "/main/layouts/page-layouts/full-layout",
    component: lazy(() => import("../../view/main/layouts/page-layouts/full")),
    layout: "FullLayout",
  },

  // APPS
  {
    path: "/buy-plans",
    component: lazy(() => import("../../view/apps/buy-plans")),
    layout: "VerticalLayout",
  },
  {
    path: "/rank",
    component: lazy(() => import("../../view/apps/ranks")),
    layout: "VerticalLayout",
  },
  {
    path: "/genealogy",
    component: lazy(() => import("../../view/apps/genealogy")),
    layout: "VerticalLayout",
  },
  {
    path: "/my-plans",
    component: lazy(() => import("../../view/apps/career-plan")),
    layout: "VerticalLayout",
  },
  {
    path: "/withdrawals",
    component: lazy(() => import("../../view/apps/withdrawals")),
    layout: "VerticalLayout",
  },
  {
    path: "/my-memberships",
    component: lazy(() => import("../../view/apps/memberships")),
    layout: "VerticalLayout",
  },

  {
    path: "/wallets",
    component: lazy(() => import("../../view/apps/wallets")),
    layout: "VerticalLayout",
  },
  {
    path: "/deposits",
    component: lazy(() => import("../../view/apps/deposits")),
    layout: "VerticalLayout",
  },


    // OTHERS ROUTES
  {
    path: "/apps/ecommerce/shop",
    component: lazy(() => import("../../view/apps/ecommerce")),
    layout: "VerticalLayout",
  },
  {
    path: "/apps/ecommerce/inventory",
    component: lazy(() => import("../../view/apps/ecommerce")),
    layout: "VerticalLayout",
  },
  {
    path: "/apps/ecommerce/inventory-new-product",
    component: lazy(() => import("../../view/apps/ecommerce/inventory/new-product")),
    layout: "VerticalLayout",
  },
  {
    path: "/apps/ecommerce/wishlist",
    component: lazy(() => import("../../view/apps/ecommerce")),
    layout: "VerticalLayout",
  },
  {
    path: "/apps/ecommerce/product-detail",
    component: lazy(() => import("../../view/apps/ecommerce")),
    layout: "VerticalLayout",
  },
  {
    path: "/apps/ecommerce/checkout",
    component: lazy(() => import("../../view/apps/ecommerce")),
    layout: "VerticalLayout",
  },
  {
    path: "/apps/ecommerce/address-information",
    component: lazy(() => import("../../view/apps/ecommerce")),
    layout: "VerticalLayout",
  },
  {
    path: "/apps/ecommerce/payment",
    component: lazy(() => import("../../view/apps/ecommerce")),
    layout: "VerticalLayout",
  },

  // PAGES
  {
    path: "/pages/landing",
    component: lazy(() => import("../../view/pages/landing")),
    layout: "FullLayout",
  },
  {
    path: "/login",
    component: lazy(() => import("../../view/pages/authentication/login")),
    layout: "FullLayout",
  },
  {
    path: "/pages/authentication/recover-password",
    component: lazy(() =>
      import("../../view/pages/authentication/recover-password")
    ),
    layout: "FullLayout",
  },
  {
    path: "/register/:referrer",
    component: lazy(() => import("../../view/pages/authentication/register")),
    layout: "FullLayout",
  },
  {
    path: "/register/",
    component: lazy(() => import("../../view/pages/authentication/register")),
    layout: "FullLayout",
  },
  {
    path: "/reset-password/",
    component: lazy(() =>
      import("../../view/pages/authentication-modern/reset-password")
    ),
    layout: "FullLayout",
  },
  {
    path: "/pages/authentication-modern/login",
    component: lazy(() => import("../../view/pages/authentication-modern/login")),
    layout: "FullLayout",
  },
  {
    path: "/recover-password",
    component: lazy(() =>
      import("../../view/pages/authentication-modern/recover-password")
    ),
    layout: "FullLayout",
  },
  {
    path: "/pages/authentication-modern/register",
    component: lazy(() => import("../../view/pages/authentication-modern/register")),
    layout: "FullLayout",
  },
  {
    path: "/pages/authentication-modern/reset-password",
    component: lazy(() =>
      import("../../view/pages/authentication-modern/reset-password")
    ),
    layout: "FullLayout",
  },
  {
    path: "/pages/blank-page",
    component: lazy(() => import("../../view/pages/blank")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/error-403",
    component: lazy(() => import("../../view/pages/errors/403")),
    layout: "FullLayout",
  },
  {
    path: "/pages/error-404",
    component: lazy(() => import("../../view/pages/errors/404")),
    layout: "FullLayout",
  },
  {
    path: "/pages/error-500",
    component: lazy(() => import("../../view/pages/errors/500")),
    layout: "FullLayout",
  },
  {
    path: "/pages/error-502",
    component: lazy(() => import("../../view/pages/errors/502")),
    layout: "FullLayout",
  },
  {
    path: "/pages/error-503",
    component: lazy(() => import("../../view/pages/errors/503")),
    layout: "FullLayout",
  },
  {
    path: "/pages/coming-soon",
    component: lazy(() => import("../../view/pages/errors/coming-soon")),
    layout: "FullLayout",
  },
  {
    path: "/pages/maintenance",
    component: lazy(() => import("../../view/pages/errors/maintenance")),
    layout: "FullLayout",
  },
  {
    path: "/pages/faq",
    component: lazy(() => import("../../view/pages/faq")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/invoice",
    component: lazy(() => import("../../view/pages/invoice")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/knowledge-base/knowledge-base-1",
    component: lazy(() =>
      import("../../view/pages/knowledge-base/knowledge-base-1")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/knowledge-base/knowledge-base-2",
    component: lazy(() =>
      import("../../view/pages/knowledge-base/knowledge-base-2")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/welcome",
    component: lazy(() => import("../../view/pages/lock-screen/welcome")),
    layout: "FullLayout",
  },
  {
    path: "/pages/password-is-changed",
    component: lazy(() => import("../../view/pages/lock-screen/password-is-changed")),
    layout: "FullLayout",
  },
  {
    path: "/pages/deactivated",
    component: lazy(() => import("../../view/pages/lock-screen/deactivated")),
    layout: "FullLayout",
  },
  {
    path: "/pages/lock",
    component: lazy(() => import("../../view/pages/lock-screen/lock")),
    layout: "FullLayout",
  },
  {
    path: "/pages/pricing",
    component: lazy(() => import("../../view/pages/pricing")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/profile/personel-information",
    component: lazy(() => import("../../view/pages/profile")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/profile/notifications",
    component: lazy(() => import("../../view/pages/profile")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/profile/activity",
    component: lazy(() => import("../../view/pages/profile")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/profile/security",
    component: lazy(() => import("../../view/pages/profile")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/profile/password-change",
    component: lazy(() => import("../../view/pages/profile")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/profile/connect-with-social",
    component: lazy(() => import("../../view/pages/profile")),
    layout: "VerticalLayout",
  }
];

export default PagesRoutes;