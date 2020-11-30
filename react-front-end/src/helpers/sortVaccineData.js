export default function sortVacData(vaccineData) {

  const vaccinePreClinRes = [];
  const vaccinePreClinTri = [];
  const vaccineP1T = [];
  const vaccineP2T = [];
  const vaccineP3T = [];
  const vaccineFDA = [];
  const vaccineAvailable = [];

  const vaccineStatus = [
    { statusID: 1, phaseName: "Pre-clinical research" },
    { statusID: 2, phaseName: "Pre-clinical trials" },
    { statusID: 3, phaseName: "Phase 1 trial" },
    { statusID: 4, phaseName: "Phase 2 trial" },
    { statusID: 5, phaseName: "Phase 3 trial" },
    { statusID: 6, phaseName: "FDA Approved" },
    { statusID: 7, phaseName: "Generally Available" }
  ];

  // organizes vaccine related information based on phase id identified in vaccineStatus
  vaccineData[1].data.feed.entry.forEach((vaccineItem) => {

    if (+vaccineItem["gsx$phase"]["$t"] === vaccineStatus[0].statusID) {

      vaccinePreClinRes.push({ company: vaccineItem["gsx$companyname"]["$t"], vaccineName: vaccineItem["gsx$vaccinename"]["$t"], vaccineType: vaccineItem["gsx$vaccinetype"]["$t"], vaccineDetails: vaccineItem["gsx$details"]["$t"], vaccineStatus: vaccineItem["gsx$status"]["$t"], vaccineArticle: vaccineItem["gsx$articles"]["$t"], vaccinePhase: vaccineStatus[0].phaseName });

    } else if (+vaccineItem["gsx$phase"]["$t"] === vaccineStatus[1].statusID) {

      vaccinePreClinTri.push({ company: vaccineItem["gsx$companyname"]["$t"], vaccineName: vaccineItem["gsx$vaccinename"]["$t"], vaccineType: vaccineItem["gsx$vaccinetype"]["$t"], vaccineDetails: vaccineItem["gsx$details"]["$t"], vaccineStatus: vaccineItem["gsx$status"]["$t"], vaccineArticle: vaccineItem["gsx$articles"]["$t"], vaccinePhase: vaccineStatus[1].phaseName });

    } else if (+vaccineItem["gsx$phase"]["$t"] === vaccineStatus[2].statusID) {

      vaccineP1T.push({ company: vaccineItem["gsx$companyname"]["$t"], vaccineName: vaccineItem["gsx$vaccinename"]["$t"], vaccineType: vaccineItem["gsx$vaccinetype"]["$t"], vaccineDetails: vaccineItem["gsx$details"]["$t"], vaccineStatus: vaccineItem["gsx$status"]["$t"], vaccineArticle: vaccineItem["gsx$articles"]["$t"], vaccinePhase: vaccineStatus[2].phaseName });

    } else if (+vaccineItem["gsx$phase"]["$t"] === vaccineStatus[3].statusID) {

      vaccineP2T.push({ company: vaccineItem["gsx$companyname"]["$t"], vaccineName: vaccineItem["gsx$vaccinename"]["$t"], vaccineType: vaccineItem["gsx$vaccinetype"]["$t"], vaccineDetails: vaccineItem["gsx$details"]["$t"], vaccineStatus: vaccineItem["gsx$status"]["$t"], vaccineArticle: vaccineItem["gsx$articles"]["$t"], vaccinePhase: vaccineStatus[3].phaseName });

    } else if (+vaccineItem["gsx$phase"]["$t"] === vaccineStatus[4].statusID) {

      vaccineP3T.push({ company: vaccineItem["gsx$companyname"]["$t"], vaccineName: vaccineItem["gsx$vaccinename"]["$t"], vaccineType: vaccineItem["gsx$vaccinetype"]["$t"], vaccineDetails: vaccineItem["gsx$details"]["$t"], vaccineStatus: vaccineItem["gsx$status"]["$t"], vaccineArticle: vaccineItem["gsx$articles"]["$t"], vaccinePhase: vaccineStatus[4].phaseName });

    } else if (+vaccineItem["gsx$phase"]["$t"] === vaccineStatus[5].statusID) {

      vaccineFDA.push({ company: vaccineItem["gsx$companyname"]["$t"], vaccineName: vaccineItem["gsx$vaccinename"]["$t"], vaccineType: vaccineItem["gsx$vaccinetype"]["$t"], vaccineDetails: vaccineItem["gsx$details"]["$t"], vaccineStatus: vaccineItem["gsx$status"]["$t"], vaccineArticle: vaccineItem["gsx$articles"]["$t"], vaccinePhase: vaccineStatus[5].phaseName });

    } else {

      vaccineAvailable.push({ company: vaccineItem["gsx$companyname"]["$t"], vaccineName: vaccineItem["gsx$vaccinename"]["$t"], vaccineType: vaccineItem["gsx$vaccinetype"]["$t"], vaccineDetails: vaccineItem["gsx$details"]["$t"], vaccineStatus: vaccineItem["gsx$status"]["$t"], vaccineArticle: vaccineItem["gsx$articles"]["$t"], vaccinePhase: vaccineStatus[6].phaseName });

    }
  }
  );

  return { vaccinePreClinRes, vaccinePreClinTri, vaccineP1T, vaccineP2T, vaccineP3T, vaccineFDA, vaccineAvailable }
}


