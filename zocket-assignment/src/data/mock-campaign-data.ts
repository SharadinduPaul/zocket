export interface MockDataProps {
  title: string;
  createdOn: string;
  imageUrl: string;
  dateRange: {
    startDate: string;
    endDate: string;
  };
  clicks: number;
  budget: number;
  location: string;
  platform: "facebook" | "google" | "instagram" | "youtube";
  selected: boolean;
  active: boolean;
  status: "Live now" | "Paused" | "Exausted";
}

export const mockData: MockDataProps[] = [
  {
    title: "Blueberry cake",
    createdOn: "13 Apr",
    imageUrl: "https://picsum.photos/id/1/400/400",
    dateRange: {
      startDate: "1st Jan 2022",
      endDate: "31st Dec 2022",
    },
    clicks: 150,
    budget: 2020,
    location: "Chennai",
    platform: "facebook",
    selected: false,
    active: true,
    status: "Exausted",
  },
  {
    title: "Raspberry Cake",
    createdOn: "14th Jan",
    imageUrl: "https://picsum.photos/id/2/400/400",
    dateRange: {
      startDate: "3rd May 2010",
      endDate: "4th Nov 2020",
    },
    clicks: 200,
    budget: 9000,
    location: "Kolkata",
    platform: "google",
    selected: false,
    active: true,
    status: "Live now",
  },
  {
    title: "Choco Fudge Cake",
    createdOn: "2nd Feb",
    imageUrl: "https://picsum.photos/id/15/400/400",
    dateRange: {
      startDate: "12th Jan 2023",
      endDate: "1st Feb 2023",
    },
    clicks: 0,
    budget: 10000,
    location: "Delhi",
    platform: "facebook",
    selected: false,
    active: false,
    status: "Exausted",
  },
  {
    title: "Plum Cake",
    createdOn: "14th Dec",
    imageUrl: "https://picsum.photos/id/11/400/400",
    dateRange: {
      startDate: "12th Jan 2020",
      endDate: "12th Feb 2021",
    },
    clicks: 15,
    budget: 3000,
    location: "Asansol",
    platform: "facebook",
    selected: false,
    active: true,
    status: "Paused",
  },
  {
    title: "Coffee Cake",
    createdOn: "1st Feb",
    imageUrl: "https://picsum.photos/id/21/400/400",
    dateRange: {
      startDate: "3rd Sept 2020",
      endDate: "1st Sept 2023",
    },
    clicks: 110,
    budget: 2000,
    location: "Chennai",
    platform: "youtube",
    selected: false,
    active: false,
    status: "Exausted",
  },
  {
    title: "Black Forest Cake",
    createdOn: "30th June",
    imageUrl: "https://picsum.photos/id/19/400/400",
    dateRange: {
      startDate: "21st Sept 2023",
      endDate: "2nd Oct 2023",
    },
    clicks: 100,
    budget: 450,
    location: "Durgapur",
    platform: "instagram",
    selected: false,
    active: true,
    status: "Live now",
  },
];

export const platform_options: string[] = [
  "facebook",
  "google",
  "youtube",
  "instagram",
];
export const status_options: string[] = ["Live now", "Exausted", "Paused"];
