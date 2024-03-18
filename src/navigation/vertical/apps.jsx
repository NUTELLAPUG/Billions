import { Calendar, Bookmark, Award, Messages1, Wallet, Bank, MoneyRecive, Tree, ShoppingBag, Rank  } from 'iconsax-react';

import IntlMessages from "../../layout/components/lang/IntlMessages";

const apps = [
    {
        header: <IntlMessages id="sidebar-apps" />,
    },
    {
        id: "buy-plans",
        title: "Comprar plan",
        icon: <ShoppingBag size={18} />,
        navLink: "/buy-plans",
    },
    {
        id: "genealogy",
        title: "Genealogia",
        icon: <Tree size={18} />,
        navLink: "/genealogy",
    },
    {
        id: "withdrawals",
        title: "Retiros",
        icon: <MoneyRecive size={18} />,
        //tag: <IntlMessages id="coming-soon" />,
        navLink: "/withdrawals",

    },
    {
        id: "my-plans",
        title: "Mis membresias",
        icon: <Bookmark size={18} />,
        navLink: "/my-memberships",

    },
    {
        id: "deposits",
        title: "Mis depositos",
        icon: <Bank size={18} />,
        //tag: <IntlMessages id="coming-soon" />,
        navLink: "/deposits",

    },
    {
        id: "wallets",
        title: "Mis billeteras",
        icon: <Wallet size={18} />,
        //tag: <IntlMessages id="coming-soon" />,
        navLink: "/wallets",

    },
];

export default apps
