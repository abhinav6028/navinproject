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
        name: 'Home',
        icon: DashboardIcon,
        path: '/',
        subRouts: [
            {
                name: 'Home',
                path: '/',
            }
        ]
    },
    {
        name: 'Product',
        path: '/',
        icon: CategoryIcon,
        subRouts: [
            {
                name: 'Product',
                path: '/product'
            },
        ],

    },
    {
        name: 'Sales',
        icon: AttachMoneyIcon,
        subRouts: [
            {
                name: 'Customers',
                path: 'sales/customers'
            },
            {
                name: 'Sales Orders',
                path: 'sales/salesorders'
            },
            {
                name: 'Invoices',
                path: 'sales/invoices'
            },
            {
                name: 'Payment Received',
                path: 'sales/paymentreceived'
            },
            {
                name: 'Credit Invoices',
                path: 'sales/creditinvoices'
            },
            {
                name: 'Quetes',
                path: 'sales/quetes'
            },
        ],

    },
    {
        name: 'Purchases',
        icon: ShopIcon,
        subRouts: [
            {
                name: 'Vendors',
                path: 'purchases/vendors'
            },
            {
                name: 'Expences',
                path: 'purchases/expences'
            },
            {
                name: 'Purchases Orders',
                path: 'purchases/purchaseorders'
            },
            {
                name: 'Bills',
                path: 'purchases/bills'
            }
        ],

    },
    {
        name: 'Account',
        icon: SentimentNeutralIcon,
        subRouts: [
            {
                name: 'Manual Journals',
                path: 'account/manualjournals'
            },
            {
                name: 'Chart Of Accounts',
                path: 'account/chartofaccounts'
            },
            {
                name: 'Journals',
                path: 'account/journals'
            }
        ],

    },
    {
        name: 'Reports',
        icon: CardMembershipIcon,
        subRouts: [
            {
                name: 'e-Way Bills',
                path: ''
            },
        ],

    },
    {
        name: 'Setting',
        icon: AccountBalanceWalletIcon,
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
        subRouts: [
            {
                name: 'Reports',
                path: ''
            },
        ],

    },

]