// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json(IMAGES_DATA_LIST)
}

export const IMAGES_DATA_LIST = [
    {
        name: 'Greatwall',
        id: '1',
        url: '/assets/images/india-in-pictures-beautiful-places-to-photograph-taj-mahal.png'
    },
    {
        name: 'Operal house',
        id: '2',
        url: '/assets/images/sydney-harbour.png'
    },
    {
        name: 'Tower',
        id: '3',
        url: '/assets/images/tower.png'
    },

];