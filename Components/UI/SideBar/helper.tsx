

import Inventory2Icon from '@mui/icons-material/Inventory2';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsIcon from '@mui/icons-material/Settings';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

import QueryStatsIcon from '@mui/icons-material/QueryStats';
import Shop2Icon from '@mui/icons-material/Shop2';

import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import AudiotrackOutlinedIcon from '@mui/icons-material/AudiotrackOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';
import ExposureOutlinedIcon from '@mui/icons-material/ExposureOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export const subRoutes: any = [

    {
        name: 'Dashboard',
        icon: OtherHousesOutlinedIcon,
        children: [
            {
                text: 'Dashboard',
                path: '/',
                icon: OtherHousesOutlinedIcon
            },

        ]
    },
    {
        name: 'Library',
        icon: LibraryBooksOutlinedIcon,
        children: [
            {
                text: 'Syncs',
                path: '/items/category',
                icon: CachedOutlinedIcon
            },
            {
                text: 'Uploads',
                path: '/items/subcategory',
                icon: FileUploadOutlinedIcon
            },

        ]
    },
    {
        name: 'Collection',
        icon: QueueMusicOutlinedIcon,
        children: [
            {
                text: 'Tracks',
                path: '/sales/customers',
                icon: AudiotrackOutlinedIcon
            },
            {
                text: 'Playlists',
                path: '/sales/salesorders',
                icon: QueueMusicOutlinedIcon
            },
            {
                text: 'Artist',
                path: '/sales/salesorders',
                icon: KeyboardVoiceOutlinedIcon
            },
            {
                text: 'Albums',
                path: '/sales/salesorders',
                icon: CollectionsBookmarkOutlinedIcon
            },
            {
                text: 'Genres',
                path: '/sales/salesorders',
                icon: CameraOutlinedIcon
            },
            {
                text: 'Decades',
                path: '/sales/salesorders',
                icon: ExposureOutlinedIcon
            },
            {
                text: 'Geos',
                path: '/sales/salesorders',
                icon: LanguageOutlinedIcon
            },

        ]
    },
    {
        name: 'Studio',
        icon: Shop2Icon,
        children: [
            {
                text: "Inspiration",
                path: '/purchases/vendors',
                icon: SentimentSatisfiedOutlinedIcon
            },
            {
                text: "Mood Recolonization",
                path: '/purchases/expences',
                icon: FavoriteBorderOutlinedIcon
            },

        ]
    },


]
