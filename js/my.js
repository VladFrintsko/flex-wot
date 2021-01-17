let nations = [
  {
    country: "USSR",
    icon: "./icons/ussr_small.png",
  },
  {
    country: "Germany",
    icon: "./icons/germany_small.png",
  },
  {
    country: "USA",
    icon: "./icons/usa_small.png",
  },
  {
    country: "UK",
    icon: "./icons/uk_small.png",
  },
  {
    country: "France",
    icon: "./icons/france_small.png",
  },
  {
    country: "Italy",
    icon: "./icons/italy_small.png",
  },
  {
    country: "Sweden",
    icon: "./icons/sweden_small.png",
  },
  {
    country: "Poland",
    icon: "./icons/poland_small.png",
  },
  {
    country: "Czech",
    icon: "./icons/czech_small.png"
  },
  {
    country: "Japan",
    icon: "./icons/japan_small.png",
  },
  {
    country: "China",
    icon: "./icons/china_small.png",
  },
];

let types = [
  {
    type: "light",
    icon: "./icons/lighttank.png",
  },
  {
    type: "medium",
    icon: "./icons/mediumtank.png",
  },
  {
    type: "heavy",
    icon: "./icons/heavytank.png",
  },
  {
    type: "at-spg",
    icon: "./icons/at-spg.png",
  },
  {
    type: "spg",
    icon: "./icons/spg.png",
  },
];

let tanks = [
  {
    name: "ИС-7",
    type: "heavy",
    icon: "./icons/IS_7.svg",
    level: 'X',
    national: "USSR",
  },
  {
    name: "Т100-ЛТ",
    type: "light",
    icon: "./icons/T100_LT.svg",
    level: 'X',
    national: "USSR",
  },
  {
    name: "K-91",
    type: "medium",
    icon: "./icons/K_91.svg",
    level: 'X',
    national: "USSR",
  },
  {
    name: "Объект 261",
    type: "spg",
    icon: "./icons/Ob261.svg",
    level: 'X',
    national: "USSR",
  },
  {
    name: "Объект 268",
    type: "at-spg",
    icon: "./icons/Ob268.svg",
    level: 'X',
    national: "USSR",
  },
  {
    name: "Rheinmetall Panzerwagen",
    type: "light",
    icon: "./icons/Rheinmetall_Panzerwagen.svg",
    level: 'X',
    national: "Germany",
  },
  {
    name: "Leopard 1",
    type: "medium",
    icon: "./icons/Leopard_1.svg",
    level: 'X',
    national: "Germany",
  },
  {
    name: "Maus",
    type: "heavy",
    icon: "./icons/Maus.svg",
    level: 'X',
    national: "Germany",
  },
  {
    name: "Grille 15",
    type: "at-spg",
    icon: "./icons/Grille_15.svg",
    level: 'X',
    national: "Germany",
  },
  {
    name: "G.W. E 100",
    type: "spg",
    icon: "./icons/G.W._E_100.svg",
    level: 'X',
    national: "Germany",
  },
  {
    name: "XM551 Sheridan",
    type: "light",
    icon: "./icons/XM551_Sheridan.svg",
    level: 'X',
    national: "USA",
  },
  {
    name: "M48A5 Patton",
    type: "medium",
    icon: "./icons/M48A5_Patton.svg",
    level: 'X',
    national: "USA",
  },
  {
    name: "T57 Heavy Tank",
    type: "heavy",
    icon: "./icons/T57_Heavy_Tank.svg",
    level: 'X',
    national: "USA",
  },
  {
    name: "T110E4",
    type: "at-spg",
    icon: "./icons/T110E4.svg",
    level: 'X',
    national: "USA",
  },
  {
    name: "T92 HMC",
    type: "spg",
    icon: "./icons/T92_HMC.svg",
    level: 'X',
    national: "USA",
  },
  {
    name: "WZ-132-1",
    type: "light",
    icon: "./icons/WZ_132_1.svg",
    level: 'X',
    national: "China",
  },
  {
    name: "121",
    type: "medium",
    icon: "./icons/121.svg",
    level: 'X',
    national: "China",
  },
  {
    name: "WZ-111 model 5A",
    type: "heavy",
    icon: "./icons/WZ_111_model_5A.svg",
    level: 'X',
    national: "China",
  },
  {
    name: "WZ-113G FT",
    type: "at-spg",
    icon: "./icons/WZ_113G_FT.svg",
    level: 'X',
    national: "China",
  },
  {
    name: "Panhard EBR 105",
    type: "light",
    icon: "./icons/Panhard_EBR_105.svg",
    level: 'X',
    national: "France",
  },
  {
    name: "Bat.-Chatilion 25 t",
    type: "medium",
    icon: "./icons/Bat_Chatilion_25_t.svg",
    level: 'X',
    national: "France",
  },
  {
    name: "AMX 50 B",
    type: "heavy",
    icon: "./icons/AMX_50_B.svg",
    level: 'X',
    national: "France",
  },
  {
    name: "AMX 50 Foch(155)",
    type: "at-spg",
    icon: "./icons/AMX_50_Foch(155).svg",
    level: 'X',
    national: "France",
  },
  {
    name: "Bat.-Chatillon 155 58",
    type: "spg",
    icon: "./icons/Bat-Chatillon_155_58.svg",
    level: 'X',
    national: "France",
  },
  {
    name: "Manticore",
    type: "light",
    icon: "./icons/Manticore.svg",
    level: 'X',
    national: "UK",
  },
  {
    name: "Centurion Action X",
    type: "medium",
    icon: "./icons/Centurion_Action_X.svg",
    level: 'X',
    national: "UK",
  },
  {
    name: "Super Conqueror",
    type: "heavy",
    icon: "./icons/Super_Conqueror.svg",
    level: 'X',
    national: "UK",
  },
  {
    name: "FV4005 Stage II",
    type: "at-spg",
    icon: "./icons/FV4005_Stage_II.svg",
    level: 'X',
    national: "UK",
  },
  {
    name: "Conqueror Gun Carriage",
    type: "spg",
    icon: "./icons/Conqueror_Gun_Carriage.svg",
    level: 'X',
    national: "UK",
  },
  {
    name: "STB-1",
    type: "medium",
    icon: "./icons/STB_1.svg",
    level: 'X',
    national: "Japan",
  },
  {
    name: "Type 5 Heavy",
    type: "heavy",
    icon: "./icons/Type_5_Heavy.svg",
    level: 'X',
    national: "Japan",
  },
  {
    name: "TVP T 50/51",
    type: "medium",
    icon: "./icons/TVP_T_50_51.svg",
    level: 'X',
    national: "Czech",
  },
  {
    name: "UDES 15/16",
    type: "medium",
    icon: "./icons/UDES_15_16.svg",
    level: 'X',
    national: "Sweden",
  },
  {
    name: "Kranvagn",
    type: "heavy",
    icon: "./icons/Kranvagn.svg",
    level: 'X',
    national: "Sweden",
  },
  {
    name: "Strv 103B",
    type: "at-spg",
    icon: "./icons/Strv_103B.svg",
    level: 'X',
    national: "Sweden",
  },
  {
    name: "CS-63",
    type: "medium",
    icon: "./icons/CS_63.svg",
    level: 'X',
    national: "Poland",
  },
  {
    name: "60TP",
    type: "heavy",
    icon: "./icons/60TP.svg",
    level: 'X',
    national: "Poland",
  },
  {
    name: "Progetto M40 mod.65",
    type: "medium",
    icon: "./icons/Progetto_M40.svg",
    level: 'X',
    national: "Italy",
  },
];

let flag = document.querySelector(".nations");
let type = document.querySelector(".tank_type");
let searchTank = document.querySelector(".random_tank");
let tankListFromNation = document.querySelector(".nations");
let tankListFromType = document.querySelector('.tank_type');
let writeTanks = document.querySelector(".tanks");

// create dom for flags
for (let i = 0; i < nations.length; i++) {
  flag.innerHTML += `<div class='icon_wrapper'><img class='icon' src=${nations[i].icon}><div class='icon_name'>${nations[i].country}</div></div>`;
}

// create dom for tanks type
for (let i = 0; i < types.length; i++) {
  type.innerHTML += `<div class='icon_wrapper'><img class='icon' src=${types[i].icon}><div class='icon_name'>${types[i].type}</div></div>`;
}

//search random tank
searchTank.addEventListener("click", () => {
  let rand = Math.floor(Math.random() * tanks.length);
  document.querySelector(
    ".my_tank"
  ).innerHTML = `<img src='${tanks[rand].icon}'> ${tanks[rand].name} (${tanks[rand].national})`;
});

//tank from nation list
tankListFromNation.addEventListener("click", (event) => {
  document.querySelector('#list').innerText = 'TANKS';
  let tanksArray = [];
  writeTanks.innerHTML = "";
  tankListFromNation = event.target;
  tankListFromNation = tankListFromNation.parentElement.children[1].innerText.toLowerCase();
  for (let i = 0; i < tanks.length; i++) {
    if (tankListFromNation === tanks[i].national.toLowerCase()) {
      tanksArray.push(tanks[i]);
    }
  }
  for (let i = 0; i < tanksArray.length; i++) {
    writeTanks.innerHTML += `<li class='tank_info'><div>${tanksArray[i].national}</div> <div>${tanksArray[i].type}</div> <div><img src ='${tanksArray[i].icon}'></div><div>${tanksArray[i].name}</div><div> level: ${tanksArray[i].level}</div></li>`;
  }
});

//tank from type list
tankListFromType.addEventListener("click", (event) => {
  document.querySelector('#list').innerText = 'TANKS';
  let tanksArray = [];
  writeTanks.innerHTML = "";
  tankListFromType = event.target;
  tankListFromType = tankListFromType.parentElement.children[1].innerText.toLowerCase();
  for (let i = 0; i < tanks.length; i++) {
    if (tankListFromType === tanks[i].type.toLowerCase()) {
      tanksArray.push(tanks[i]);
    }
  }
  for (let i = 0; i < tanksArray.length; i++) {
    writeTanks.innerHTML += `<li class='tank_info'><div>${tanksArray[i].national}</div> <div>${tanksArray[i].type}</div> <div><img src ='${tanksArray[i].icon}'></div><div>${tanksArray[i].name}</div><div> level: ${tanksArray[i].level}</div></li>`;
  }
});
