const fs = require('fs');
const path = require('path');

// Reads QCM from data/qcm-endocrinologie.json
const qcmPath = path.join(__dirname, 'data', 'qcm-endocrinologie.json');
const formattedQCM = JSON.parse(fs.readFileSync(qcmPath, 'utf8'));

// Extract unique chapters from dataset
const chapterMap = new Map();
formattedQCM.forEach(q => {
  if (!chapterMap.has(q.chapitre_num)) {
    chapterMap.set(q.chapitre_num, {
      num: q.chapitre_num,
      nom: q.chapitre,
      totalQCM: 0
    });
  }
  chapterMap.get(q.chapitre_num).totalQCM++;
});

const chapitres = Array.from(chapterMap.values()).sort((a, b) => a.num - b.num);

// Write JS file for direct inclusion in HTML
const qcmJsPath = path.join(__dirname, 'data', 'qcm-endocrinologie.js');
fs.writeFileSync(qcmJsPath, 'window.QCM_ENDOCRINOLOGIE = ' + JSON.stringify(formattedQCM, null, 2) + ';\n', 'utf8');

// Build database structure
const database = {
  universites: [
    {
      id: "mostaganem",
      nom: "Université de Mostaganem",
      annees: [
        {
          id: "5eme-annee",
          nom: "5ème année",
          modules: [
            {
              slug: "otr",
              nom: "OTR (ORTHOPEDIE , TRAUMATOLOGIE, REUMATHOLOGIE)",
              nomCourt: "OTR",
              statut: "Bientôt disponible",
              description: "Orthopédie, Traumatologie et Rhumatologie",
              totalQCM: 0,
              disponible: false
            },
            {
              slug: "endocrinologie",
              nom: "Endocrinologie",
              nomCourt: "Endocrinologie",
              statut: "Disponible",
              description: "Annales complètes EMD, contrôles et rattrapages",
              totalQCM: formattedQCM.length,
              disponible: true,
              chapitres
            },
            {
              slug: "uro-nephrologie",
              nom: "Uro-néphrologie",
              nomCourt: "Uro-néphrologie",
              statut: "Bientôt disponible",
              description: "Urologie et Néphrologie",
              totalQCM: 0,
              disponible: false
            },
            {
              slug: "psychiatrie",
              nom: "Psychiatrie",
              nomCourt: "Psychiatrie",
              statut: "Bientôt disponible",
              description: "Psychiatrie et Santé Mentale",
              totalQCM: 0,
              disponible: false
            },
            {
              slug: "gynecologie",
              nom: "Gynécologie",
              nomCourt: "Gynécologie",
              statut: "Bientôt disponible",
              description: "Gynécologie et Obstétrique",
              totalQCM: 0,
              disponible: false
            },
            {
              slug: "pediatrie",
              nom: "Pédiatrie",
              nomCourt: "Pédiatrie",
              statut: "Bientôt disponible",
              description: "Pédiatrie et Néonatalogie",
              totalQCM: 0,
              disponible: false
            }
          ]
        }
      ]
    }
  ],
  qcmByModule: {
    "endocrinologie": "window.QCM_ENDOCRINOLOGIE",
    "otr": [],
    "uro-nephrologie": [],
    "psychiatrie": [],
    "gynecologie": [],
    "pediatrie": []
  }
};

const dbJsonPath = path.join(__dirname, 'data', 'database.json');
fs.writeFileSync(dbJsonPath, JSON.stringify(database, null, 2), 'utf8');

const dbJs = `// MAJORY Database Configuration
// Architecture: Université -> Année d'étude -> Modules -> QCM
window.MAJORY_DATABASE = ${JSON.stringify(database, null, 2)};

// Helper to get QCM list for any module
window.getQCMByModule = function(slug) {
  if (slug === 'endocrinologie' && window.QCM_ENDOCRINOLOGIE) {
    return window.QCM_ENDOCRINOLOGIE;
  }
  return window.MAJORY_DATABASE.qcmByModule[slug] || [];
};
`;

const dbJsPath = path.join(__dirname, 'data', 'database.js');
fs.writeFileSync(dbJsPath, dbJs, 'utf8');

console.log('Database and QCM JS assets updated successfully.');
