const Expensive = [
    {
        id: 1,
        title: "Tesla Model S",
        category: { name: "Average cars" },
        price: 80000,
        images: ["https://hips.hearstapps.com/hmg-prod/images/2020-porsche-taycan-4s-vs-2020-tesla-model-s-long-range-202-1621386342.jpg?crop=0.772xw:0.579xh;0.0489xw,0.232xh&resize=1200:*"],
      },
      {
        id: 2,
        title: "BMW M3",
        category: { name: "Average cars" },
        price:80000,
        images: ["https://www.bmw.cz/content/dam/bmw/common/all-models/m-series/m3-sedan/2023/highlights/bmw-3-series-cs-m-automobiles-sp-desktop.jpg"],
      },
      {
        id: 3,
        title: " Audi A6 allroad",
        category: { name: "Average cars" },
        price: 70000,
        images: ["https://cdn.jdpower.com/JDP_2023%20Audi%20A6%20Allroad%20Dew%20Silver%20Front%20Quarter%20View.jpg"],
      },
      {
        id: 4,
        title: " Chrysler 300",
        category: { name: "Average cars" },
        price: 54000,
        images: ["https://www.motortrend.com/uploads/2022/09/2023-Chrysler-300C-1.jpg?fit=around%7C875:492.1875"],
      },
      {
        id: 5,
        title: " Ford F-150",
        category: { name: "Average cars" },
        price: 54000,
        images: ["https://d15-a.sdn.cz/d_15/c_img_QJ_M/yXfBur.jpeg?fl=cro,0,64,1280,720%7Cres,1200,,1%7Cjpg,80,,1"],
      },
      {
        id: 6,
        title: "Lincoln Navigator",
        category: { name: "Cars for travel" },
        price: 77000,
        images: ["https://www.thedrive.com/content/2022/03/2022-Lincoln-Navigator_KL_17.jpg?quality=85"],
      },
      {
        id: 7,
        title: "Lexus RX",
        category: { name: "Cars for travel" },
        price: 50000,
        images: ["https://hips.hearstapps.com/hmg-prod/images/2023-lexus-rx350h-awd-103-1662677255.jpg?crop=0.516xw:0.387xh;0.297xw,0.418xh&resize=1200:*"],
      },
      {
        id: 8,
        title: "Range Rover",
        category: { name: "Cars for travel" },
        price: 100000,
        images: ["https://www.cnet.com/a/img/resize/e0bc308535747d9f3499d8a2248ac413b9246f00/hub/2021/10/25/0b2caab3-02c2-40bf-9c44-a8d970e675bf/2023-land-rover-range-rover-sv-promo.jpg?auto=webp&width=1920"],
      },
      {
        id: 9,
        title: "Porsche 718 GT4 RS",
        category: { name: "Racing cars" },
        price: 200000,
        images: ["https://editorial.pxcrush.net/carsales/general/editorial/porsche-718-cayman-gt4-rs_hr154.jpg?width=1024&height=683"],
      },
      {
        id: 10,
        title: "Czinger 21C",
        category: { name: "Racing cars" },
        price: 17000000,
        images: ["https://www.cnet.com/a/img/resize/b89b5464541404970e78c16847f6c89eaf218728/hub/2022/08/15/a02e0466-5b30-40e9-b98e-b4a237bcc663/czinger-21c-hypercar-114.jpg?auto=webp&width=1200"],
      },
      {
        id: 11,
        title: "Praga R1R",
        category: { name: "Racing cars" },
        price: 160000,
        images: ["https://img.ihned.cz/attachment.php/850/60962850/xhzCp7oNFjde95WIaJOrK1mQi0U8nuwq/P201505290365001.jpeg"],
      },
   
      {
        id: 12,
        title: " Toyota Corolla Cross",
        category: { name: "Cheap cars" },
        price: 23000,
        images: ["https://www.toyota.cz/content/dam/toyota/nmsc/central-europe/cars/corolla-cross/hotspot/hotspots.jpg"],
      },
      {
        id: 13,
        title: "Subaru Legacy",
        category: { name: "Cheap cars" },
        price: 25000,
        images: ["https://media.ed.edmunds-media.com/subaru/legacy/2023/oem/2023_subaru_legacy_sedan_sport_fq_oem_1_1600.jpg"],
      },
      {
        id: 14,
        title: "Mitsubishi Mirage ES",
        category: { name: "Cheap cars" },
        price: 17000,
        images: ["https://media.ed.edmunds-media.com/mitsubishi/mirage/2022/oem/2022_mitsubishi_mirage_4dr-hatchback_black-edition_fq_oem_1_1600.jpg"],
      },
      {
        id: 15,
        title: "Hyundai Venue SE",
        category: { name: "Cheap cars" },
        price: 20000,
        images: ["https://hips.hearstapps.com/hmg-prod/images/2023-hyundai-venue-front-1658851456.jpg"],
      },
      {
        id: 16,
        title: "Kia Soul LX",
        category: { name: "Cheap cars" },
        price: 21000,
        images: ["https://media.ed.edmunds-media.com/kia/soul/2023/oem/2023_kia_soul_wagon_gt-line_fq_oem_1_1280.jpg"],
      },
      {
        id: 17,
        title: "Nissan Kicks S",
        category: { name: "Cheap cars" },
        price: 22000,
        images: ["https://vehicle-images.dealerinspire.com/f035-110007342/3N1CP5BV4PL568492/94e1a37239573020b262c95ccc28de23.jpg"],
      },
      {
        id: 18,
        title: "Nissan Versa",
        category: { name: "Cheap cars" },
        price: 17000,
        images: ["https://editorials.autotrader.ca/media/191524/2021-nissan-versa-sr-02-jm.jpg?anchor=center&mode=crop&width=1920&height=1080&rnd=132555807309430000"],
      },
      {
        id: 19,
        title: " Mitsubishi Mirage",
        category: { name: "Cheap cars" },
        price: 17500,
        images: ["https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/wheels/wp-content/uploads/2023/04/2023_Mitsubishi_Mirage_Review1.jpg"],
      },
      {
          id: 20,
          title: "Kia Rio",
          category: { name: "Cheap cars" },
          price: 18000,
          images: ["https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/rio-YB/discover/kia-rio-gtl-my22-34front-w.jpg"],
        },
      {
        id: 21,
        title: "Aston Martin Valour",
        category: { name: "Expensive cars" },
        price: 1500000,
        images: ["https://www.topgear.com/sites/default/files/2023/07/AV14.jpg"],
      },
      {
        id: 22,
        title: "Rolls-Royce Ghost",
        category: { name: "Expensive cars" },
        price: 400000,
        images: ["https://hips.hearstapps.com/hmg-prod/images/p90508471-highres-rolls-royce-ghost-ex-copy-64dbcad7a198e.jpg?crop=0.596xw:0.373xh;0.173xw,0.443xh&resize=1200:*"],
      },
      {
        id: 23,
        title: "Mercedes-Maybach S",
        category: { name: "Expensive cars" },
        price: 250000,
        images: ["https://www.mercedes-benz.cz/content/czechia/cs/passengercars/models/saloon/z223-23-1/overview/_jcr_content/root/responsivegrid/tabs/tabitem/media_gallery/media_gallery_item_1391095686/image.component.damq1.3354859325573.jpg/mercedes-maybach-s-class-z223-exterior-enginehood-2176x1224-10-2022.jpg"],
      },
      {
        id: 24,
        title: "Bentley Bacalar",
        category: { name: "Expensive cars" },
        price: 20000000,
        images: ["https://i.ytimg.com/vi/yGgs71CTi-w/maxresdefault.jpg"],
      },
      {
        id: 25,
        title: "Alpine A110R ",
        category: { name: "Expensive cars" },
        price: 200000,
        images: ["https://s3-prod-europe.autonews.com/s3fs-public/styles/1152x647/public/PHOTOS02_317009999_PH_1_RHQNKLGPMWMZ.jpg"],
      },
      {
        id: 26,
        title: "Lamborghini V12 hybrid  ",
        category: { name: "Expensive cars" },
        price: 600000,
        images: ["https://i.insider.com/642dc2022a659a0019a68e49?width=1000&format=jpeg&auto=webp"],
      },
      {
        id: 27,
        title: "Cadillac Celestiq  ",
        category: { name: "Expensive cars" },
        price: 400000,
        images: ["https://www.motortrend.com/uploads/2022/07/2024-Cadillac-Celestiq-EV-Sedan-Front-3-4-Exterior-mt2022.jpg"],
      },  
          
  ];
  export default Expensive;