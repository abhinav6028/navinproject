import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import SavingsIcon from '@mui/icons-material/Savings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShopIcon from '@mui/icons-material/Shop';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SummarizeIcon from '@mui/icons-material/Summarize';

export const items = [
    {
        name: 'Dashboard',
        icon: DashboardIcon,
        path: '/',
        id: 0,
        subRouts: [
            {
                name: 'Dashboard',
                path: '/',
            }
        ]
    },
    {
        name: 'Items',
        path: '/',
        id: 1,
        icon: CategoryIcon,
        subRouts: [
            {
                name: 'Items',
                path: '/items/products'
            },
            {
                name: 'Price Lists',
                path: '/items/pricelist'
            },
            {
                name: 'Inventory Adjestments',
                path: '/items/inventoryadjestments'
            }
        ],

    },
    {
        name: 'Banking',
        icon: SavingsIcon,
        id: 2,
        subRouts: [
            {
                name: 'Banking',
                path: ''
            },
        ],

    },
    {
        name: 'Sales',
        icon: AttachMoneyIcon,
        id: 3,
        subRouts: [
            {
                name: 'Customers',
                path: ''
            },
            {
                name: 'Estimates',
                path: ''
            },
            {
                name: 'Retainer Invoices',
                path: ''
            },
            {
                name: 'Sales Orders',
                path: ''
            },
            {
                name: 'Delevery Challans',
                path: ''
            },
            {
                name: 'Invoices',
                path: ''
            },
            {
                name: 'Payment Received',
                path: ''
            },
            {
                name: 'Recurring Received',
                path: ''
            },
            {
                name: 'Credit Notes',
                path: ''
            },
        ],

    },
    {
        name: 'Purchases',
        icon: ShopIcon,
        id: 4,
        subRouts: [
            {
                name: 'Vendors',
                path: ''
            },
            {
                name: 'Expences',
                path: ''
            },
            {
                name: 'Recurring Expences',
                path: ''
            },
            {
                name: 'Purchase Orders',
                path: ''
            },
            {
                name: 'Bills',
                path: ''
            },
            {
                name: 'Payments Mode',
                path: ''
            },
            {
                name: 'Recurring Bills',
                path: ''
            },
            {
                name: 'Vendor Credits',
                path: ''
            }
        ],

    },
    {
        name: 'Time Tracking',
        icon: SentimentNeutralIcon,
        id: 5,
        subRouts: [
            {
                name: 'Projects',
                path: ''
            },
            {
                name: 'Timesheet',
                path: ''
            },
        ],

    },
    {
        name: 'e-Way Bills',
        icon: CardMembershipIcon,
        id: 6,
        subRouts: [
            {
                name: 'e-Way Bills',
                path: ''
            },
        ],

    },
    {
        name: 'Accountant',
        icon: AccountBalanceWalletIcon,
        id: 7,
        subRouts: [
            {
                name: 'Accountant',
                path: ''
            },
        ],

    },
    {
        name: 'Reports',
        icon: SummarizeIcon,
        id: 8,
        subRouts: [
            {
                name: 'Reports',
                path: ''
            },
        ],

    },

]