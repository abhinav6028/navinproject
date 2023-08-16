import Inventory2Icon from '@mui/icons-material/Inventory2';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsIcon from '@mui/icons-material/Settings';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

export const subRoutes = [

    {
        name: 'Dashboard',
        icon: SpaceDashboardIcon,
        children: [
            {
                text: 'Dashboard',
                path: '/'
            },

        ]
    },
    {
        name: 'Product',
        icon: Inventory2Icon,
        children: [
            {
                text: 'Category',
                path: '/items/category'
            },
            {
                text: 'Sub Category',
                path: '/items/subcategory'
            },
            {
                text: 'Product',
                path: '/items/products'
            },
        ]
    },
    {
        name: 'Sales',
        icon: TrendingDownIcon,
        children: [
            {
                text: 'Customers',
                path: '/sales/customers'
            },
            {
                text: 'Sales Orders',
                path: '/sales/salesorders'
            },

        ]
    },
    {
        name: 'Purchases',
        icon: ShoppingBasketIcon,
        children: [
            {
                text: "Vendors",
                path: '/purchases/vendors'
            },
            {
                text: "Expences",
                path: '/purchases/expences'
            },
            {
                text: "Purchases Orders",
                path: '/purchases/purchaseorders'
            },
            {
                text: "Bills",
                path: '/purchases/bills'
            },
        ]
    },
    {
        name: 'Account',
        icon: AccountBalanceIcon,
        children: [
            {
                text: 'Manual Journals',
                path: '/account/manualjournals'
            },
            {
                text: 'Chart Of Accounts',
                path: '/account/chartofaccounts'
            },
        ]
    },
    {
        name: 'Settings',
        icon: SettingsIcon,
        children: [
            {
                text: "Settings",
                path: '/settings'
            },
        ]
    },

]