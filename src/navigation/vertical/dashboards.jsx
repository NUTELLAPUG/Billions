import { Health, Document ,Setting, Grid5 } from 'iconsax-react';

import IntlMessages from "../../layout/components/lang/IntlMessages";

const main = [
    {
        header: <IntlMessages id="sidebar-dashboards" />,
    },
    {
        id: "dashboards-analytics",
        title: "Panel",
        icon: <Health size={18} />,
        navLink: "/",
    },
    {
        id: "documentos",
        title: "Documentos",
        icon: <Document size={18} />,
        navLink: "/documents",
    },
    //{
    //    id: "dashboards-ecommerce",
    //    title: <IntlMessages id="sidebar-dashboards-ecommerce" />,
    //    icon: <Setting size={18} />,
    //    navLink: "/main/dashboard/ecommerce",
    //},
    //{
    //    id: "dashboards-nft",
    //    title: <IntlMessages id="sidebar-dashboards-nft" />,
    //    icon: <Grid5 size={18} />,
    //    navLink: "/main/dashboard/nft",
    //},
];

export default main