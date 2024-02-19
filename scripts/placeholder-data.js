const uuid1 = '6f8e8684-3da0-4c9e-84e3-7c124e8a4d66';
const uuid2 = '95e8b428-7e91-4a91-87a2-15310de6046f';


const users = [
  {
    id: uuid1,
    email: 'usuario@example.com',
    role: 'user',
    password: 'usuario',
    fname: 'Jesse',
    lname: 'Joy',
    image_url: '/user.jpg',
    phone: '123456789',
    description: 'Descripción del usuario'
  },
  {
    id: uuid2,
    email: 'developer1@dev.com',
    role: 'dev',
    password: 'developer1',
    fname: 'Dev',
    lname: 'React',
    image_url: '/no_image.jpg',
    phone: '987654321',
    description: 'Descripción del desarrollador'
  }
];


  
const routes = [
  {
    name: 'Yaiza Trek',
    difficunty: 'Moderate',
    country: 'Spain',
    description: 'Explore the scenic beauty of Yaiza with this moderate trekking route.',
    distance: 10,
    image_url: '',
    created_by: uuid1
  },
  {
    name: 'Highland Hike',
    difficunty: 'Difficult',
    country: 'Scotland',
    description: 'Challenge yourself with this difficult hiking route through the Scottish Highlands.',
    distance: 20,
    image_url: '',
    created_by: uuid1
  },
  {
    name: 'Coastal Trail',
    difficunty: 'Easy',
    country: 'Australia',
    description: 'Enjoy a leisurely stroll along this easy coastal trail with stunning ocean views.',
    distance: 5,
    image_url: '',
    created_by: uuid1
  },
  {
    name: 'Mountain Ascent',
    difficunty: 'Challenging',
    country: 'Nepal',
    description: 'Embark on a challenging journey to summit one of Nepal\'s majestic mountains.',
    distance: 30,
    image_url: '',
    created_by: uuid1
  },
  {
    name: 'Forest Expedition',
    difficunty: 'Moderate',
    country: 'Canada',
    description: 'Immerse yourself in the serene beauty of the Canadian wilderness on this moderate forest expedition.',
    distance: 15,
    image_url: '',
    created_by: uuid1
  },
  {
    name: 'Desert Trek',
    difficunty: 'Extreme',
    country: 'Namibia',
    description: 'Experience the harsh yet mesmerizing landscapes of the Namib Desert on this extreme trek.',
    distance: 50,
    image_url: '',
    created_by: uuid1
  }
];




  

  module.exports = {
    users,
    routes
  };
  