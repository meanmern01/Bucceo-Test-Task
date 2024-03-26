export interface SchoolData {
    image: string;
    location: string;
    schoolName: string;
    rating: number;
    liked: boolean;
    date: {
        image: string;
        text: string;
        highlight: string;
    }[];
    features: {
        text: string;
        image?: string;
    }[];
}

export const schools = [
    {
        image: "school-1.png",
        location: "Bali, Indonesia",
        schoolName: "Sammy Diving",
        rating: 3.5,
        liked: true,
        date: [
            {
                image: 'calendar.svg',
                text: "next on",
                highlight: "Oct. 27"
            },
        ],
        features: [
            {
                text: "Famous Sights"
            },
            {
                text: "3 Shipwrecks"
            },
            {
                text: "Healthy Reef",
                image: "compost.svg"
            },
        ]
    },
    {
        image: "school-2.png",
        location: "Bali, Indonesia",
        schoolName: "Bali Blue Divers",
        rating: 4,
        liked: false,
        date: [
            {
                image: 'calendar.svg',
                text: "next on",
                highlight: "Oct. 27"
            },
        ],
        features: [
            {
                text: "Starter Courses"
            },
            {
                text: "Family Friendly",
                image: "family.svg"
            },
        ]
    },
    {
        image: "school-3.png",
        location: "Bali, Indonesia",
        schoolName: "Bali Blue Divers",
        rating: 5,
        liked: false,
        date: [
            {
                image: 'calendar-2.svg',
                text: "for",
                highlight: " 4 days"
            },
            {
                image: 'calendar.svg',
                text: "in ",
                highlight: "3 weeks"
            },
        ],
        features: [
            {
                text: "Liveaboard",
                image: "houseboat.svg"
            },
            {
                text: "12-20 dives",
            },
            {
                text: "Healthy Reef",
                image: "compost.svg"
            },
        ]
    },
    {
        image: "school-1.png",
        location: "Bali, Indonesia",
        schoolName: "Sammy Diving",
        rating: 3.5,
        liked: true,
        date: [
            {
                image: 'calendar.svg',
                text: "next on",
                highlight: "Oct. 27"
            },
        ],
        features: [
            {
                text: "Famous Sights"
            },
            {
                text: "3 Shipwrecks"
            },
            {
                text: "Healthy Reef",
                image: "compost.svg"
            },
        ]
    },
    {
        image: "school-1.png",
        location: "Bali, Indonesia",
        schoolName: "Sammy Diving",
        rating: 3.5,
        liked: true,
        date: [
            {
                image: 'calendar.svg',
                text: "next on",
                highlight: "Oct. 27"
            },
        ],
        features: [
            {
                text: "Famous Sights"
            },
            {
                text: "3 Shipwrecks"
            },
            {
                text: "Healthy Reef",
                image: "compost.svg"
            },
        ]
    },
    {
        image: "school-2.png",
        location: "Bali, Indonesia",
        schoolName: "Bali Blue Divers",
        rating: 5,
        liked: false,
        date: [
            {
                image: 'calendar-2.svg',
                text: "for",
                highlight: " 4 days"
            },
            {
                image: 'calendar.svg',
                text: "in ",
                highlight: "3 weeks"
            },
        ],
        features: [
            {
                text: "Liveaboard",
                image: "houseboat.svg"
            },
            {
                text: "12-20 dives",
            },
            {
                text: "Healthy Reef",
                image: "compost.svg"
            },
        ]
    },
]