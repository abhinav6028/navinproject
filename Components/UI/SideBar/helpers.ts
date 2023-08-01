import CardMembershipIcon from '@mui/icons-material/CardMembership';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReportIcon from '@mui/icons-material/Report';

export const items = [
    {
        name: 'Home',
        icon: HomeIcon,
        subRouts: [
            {
                name: 'Home',
                icon: FiberManualRecordIcon,
                path: '/',
            }
        ]
    },
    {
        name: 'Product',
        icon: Inventory2Icon,
        subRouts: [
            {
                name: 'Product',
                icon: FiberManualRecordIcon,
                path: 'items/products'
            },
        ],

    },
    {
        name: 'Sales',
        icon: TrendingDownIcon,
        subRouts: [
            {
                name: 'Customers',
                icon: FiberManualRecordIcon,
                path: 'sales/customers'
            },
            {
                name: 'Sales Orders',
                icon: FiberManualRecordIcon,
                path: 'sales/salesorders'
            },
            // {
            //     name: 'Invoices',
            //     icon: FiberManualRecordIcon,
            //     path: 'sales/invoices'
            // },
            // {
            //     name: 'Payment Received',
            //     icon: FiberManualRecordIcon,
            //     path: 'sales/paymentreceived'
            // },
            // {
            //     name: 'Credit Invoices',
            //     icon: FiberManualRecordIcon,
            //     path: 'sales/creditinvoices'
            // },
            // {
            //     name: 'Quetes',
            //     icon: FiberManualRecordIcon,
            //     path: 'sales/quetes'
            // },
        ],
    },
    {
        name: 'Purchases',
        icon: ShoppingBasketIcon,
        subRouts: [
            {
                name: 'Vendors',
                icon: FiberManualRecordIcon,
                path: 'purchases/vendors'
            },
            {
                name: 'Expences',
                icon: FiberManualRecordIcon,
                path: 'purchases/expences'
            },
            {
                name: 'Purchases Orders',
                icon: FiberManualRecordIcon,
                path: 'purchases/purchaseorders'
            },
            {
                name: 'Bills',
                icon: FiberManualRecordIcon,
                path: 'purchases/bills'
            }
        ],

    },
    {
        name: 'Account',
        icon: AccountBalanceIcon,
        subRouts: [
            {
                name: 'Manual Journals',
                icon: FiberManualRecordIcon,
                path: 'account/manualjournals'
            },
            {
                name: 'Chart Of Accounts',
                icon: FiberManualRecordIcon,
                path: 'account/chartofaccounts'
            },
            // {
            //     name: 'Journals',
            //     path: 'account/journals'
            // }
        ],

    },
    // {
    //     name: 'Reports',
    //     icon: CardMembershipIcon,
    //     subRouts: [
    //         {
    //             name: 'e-Way Bills',
    //             icon: FiberManualRecordIcon,
    //             path: ''
    //         },
    //     ],

    // },
    {
        name: 'Settings',
        icon: AccountBalanceWalletIcon,
        subRouts: [
            {
                name: 'Accountant',
                icon: FiberManualRecordIcon,
                path: ''
            },
        ],

    },
    {
        name: 'Reports',
        icon: ReportIcon,
        subRouts: [
            {
                name: 'Reports',
                icon: FiberManualRecordIcon,
                path: 'reports'
            },
        ],

    },

]