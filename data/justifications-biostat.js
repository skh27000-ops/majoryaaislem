// ==============================================================================
// JUSTIFICATIONS DÉTAILLÉES - BIOSTATISTIQUE
// Faculté de Médecine de Mostaganem - 1ère Année
// Épreuves 2019/2020 à 2025/2026 (EMD, contrôles, rattrapage)
// ==============================================================================
window.JUSTIFICATIONS_BIOSTAT = {
 "bio-2026b-01": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Vrai (corrigé officiel).",
  "E": "Faux.",
  "_synthese": "On choisit 7 dossiers distincts (sans remise) et l'ordre de sélection n'a aucune importance : c'est une combinaison sans répétition, C(10,7).",
  "_remarque": "Source : EMD 2 Biostatistique Mostaganem 2025/2026 (07/06/2026) - Q1."
 },
 "bio-2026b-02": {
  "A": "Faux.",
  "B": "Vrai (corrigé officiel).",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "C(10,7) = C(10,3) = 10×9×8 / (3×2×1) = 120.",
  "_remarque": "Source : EMD 2 Biostatistique Mostaganem 2025/2026 (07/06/2026) - Q2."
 },
 "bio-2026b-03": {
  "A": "Vrai (corrigé officiel).",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "3 dossiers graves parmi 5 : C(5,3)=10 ; les 4 autres dossiers parmi les 5 non graves : C(5,4)=5. Total : 10×5 = 50.",
  "_remarque": "Source : EMD 2 Biostatistique Mostaganem 2025/2026 (07/06/2026) - Q3."
 },
 "bio-2026b-04": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Vrai (corrigé officiel).",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "« Au moins 3 » = 3, 4 ou 5 graves. 3 graves : C(5,3)×C(5,4)=50. 4 graves : C(5,4)×C(5,3)=5×10=50. 5 graves : C(5,5)×C(5,2)=1×10=10. Total : 50+50+10 = 110.",
  "_remarque": "Source : EMD 2 Biostatistique Mostaganem 2025/2026 (07/06/2026) - Q4."
 },
 "bio-2026b-05": {
  "A": "Vrai (corrigé officiel).",
  "B": "Vrai (corrigé officiel).",
  "C": "Vrai (corrigé officiel).",
  "D": "Vrai (corrigé officiel).",
  "E": "Faux.",
  "_synthese": "Les éléments de A sont : {1}, 2, 4, {2} et {{5}}. A) {1} est un élément de A : vrai. B) {2} ⊂ A exige que 2 ∈ A : vrai. C) {2} est un élément de A : vrai. D) {2,4} ⊂ A car 2 ∈ A et 4 ∈ A : vrai. E) {5} n'est pas un élément (l'élément est {{5}}) : faux.",
  "_remarque": "Source : EMD 2 Biostatistique Mostaganem 2025/2026 (07/06/2026) - Q5."
 },
 "bio-2026b-06": {
  "A": "Faux.",
  "B": "Vrai (corrigé officiel).",
  "C": "Vrai (corrigé officiel).",
  "D": "Faux.",
  "E": "Vrai (corrigé officiel).",
  "_synthese": "Lois de De Morgan : A \\ (B ∩ C) = (A \\ B) ∪ (A \\ C) (B vrai, A faux, car ∩ correspond à A \\ (B ∪ C)). C) (A∩B)∩(Ā ∪ C̄) = A∩B∩C̄ : vrai. D) La différence symétrique est A Δ B = (A \\ B) ∪ (B \\ A), non ∩ : faux. E) La différence symétrique est distributive sur ∩ : vrai.",
  "_remarque": "Source : EMD 2 Biostatistique Mostaganem 2025/2026 (07/06/2026) - Q6."
 },
 "bio-2026b-07": {
  "A": "Vrai (corrigé officiel).",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "P(A∩B) = P(B|A) × P(A) = 0,6 × 0,03 = 0,018.",
  "_remarque": "Source : EMD 2 Biostatistique Mostaganem 2025/2026 (07/06/2026) - Q7."
 },
 "bio-2026b-08": {
  "A": "Faux.",
  "B": "Vrai (corrigé officiel).",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "Formule de Bayes : P(A|B) = P(A∩B)/P(B) = 0,018 / 0,05 = 0,36.",
  "_remarque": "Source : EMD 2 Biostatistique Mostaganem 2025/2026 (07/06/2026) - Q8."
 },
 "bio-2026b-09": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Vrai (corrigé officiel).",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "P(A∪B) = P(A) + P(B) − P(A∩B) = 0,03 + 0,05 − 0,018 = 0,062.",
  "_remarque": "Source : EMD 2 Biostatistique Mostaganem 2025/2026 (07/06/2026) - Q9."
 },
 "bio-2026b-10": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Vrai (corrigé officiel).",
  "E": "Faux.",
  "_synthese": "A et B sont indépendants si P(A∩B) = P(A)×P(B). Ici P(A)×P(B) = 0,03×0,05 = 0,0015, alors que P(A∩B) = 0,018 : ils ne sont pas indépendants (P(B|A) = 0,6 ≠ P(B) = 0,05).",
  "_remarque": "Source : EMD 2 Biostatistique Mostaganem 2025/2026 (07/06/2026) - Q10."
 },
 "bio-2026b-11": {
  "A": "Faux.",
  "B": "Vrai (corrigé officiel).",
  "C": "Faux.",
  "D": "Vrai (corrigé officiel).",
  "E": "Faux.",
  "_synthese": "P(H) = 0,15 (B vrai). Formule des probabilités totales : P(R) = P(R|H)P(H) + P(R|H̄)P(H̄) = 0,8×0,15 + 0,1×0,85 = 0,12 + 0,085 = 0,205 (D vrai, E faux).",
  "_remarque": "Source : EMD 2 Biostatistique Mostaganem 2025/2026 (07/06/2026) - Q11."
 },
 "bio-2026b-12": {
  "A": "Faux.",
  "B": "Vrai (corrigé officiel).",
  "C": "Vrai (corrigé officiel).",
  "D": "Faux.",
  "E": "Vrai (corrigé officiel).",
  "_synthese": "Par l'énoncé P(R|H) = 0,8 (B) et P(R|H̄) = 0,1 (C). Les probabilités conditionnelles d'un même conditionnement se complètent à 1 : P(R̄|H) = 1 − 0,8 = 0,2 (E). A est faux. D est faux : P(R̄|H̄) = 1 − 0,1 = 0,9.",
  "_remarque": "Source : EMD 2 Biostatistique Mostaganem 2025/2026 (07/06/2026) - Q12."
 },
 "bio-2026b-13": {
  "A": "Faux.",
  "B": "Vrai (corrigé officiel).",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "Bayes : P(H|R) = P(R|H)P(H)/P(R) = (0,8×0,15)/0,205 = 0,12/0,205 ≈ 0,585.",
  "_remarque": "Source : EMD 2 Biostatistique Mostaganem 2025/2026 (07/06/2026) - Q13."
 },
 "bio-2026b-14": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Vrai (corrigé officiel).",
  "_synthese": "P(R̄) = 1 − 0,205 = 0,795. P(H̄ ∩ R̄) = P(R̄|H̄)P(H̄) = 0,9×0,85 = 0,765. Donc P(H̄|R̄) = 0,765/0,795 ≈ 0,962.",
  "_remarque": "Source : EMD 2 Biostatistique Mostaganem 2025/2026 (07/06/2026) - Q14."
 },
 "bio-2026a-01": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Vrai (clé retenue).",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "Les valeurs sont des nombres isolés (4, 6, 10, 20…), chacune avec son effectif : la variable est numérique et discrète. Le sujet note « qualitative discrète » pour C, probablement par erreur de rédaction ; les autres options (nominale, binaire, ordinale = qualitatives ; continue = valeurs réparties en classes d'un intervalle) ne conviennent pas.",
  "_remarque": "Proposition C libellée « qualitative discrète » dans le sujet (probable faute pour « quantitative discrète ») : c'est la seule option compatible avec des valeurs numériques isolées. Source : EMD 1 Biostatistique Mostaganem 2025/2026 (15/01/2026) - Q1."
 },
 "bio-2026a-02": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Vrai (réponse calculée).",
  "E": "Faux.",
  "_synthese": "Multiplier tous les effectifs par k multiplie aussi l'effectif total N : les fréquences relatives ni/N ne changent pas. Moyenne, variance et écart-type sont donc inchangés.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : EMD 1 Biostatistique Mostaganem 2025/2026 (15/01/2026) - Q2."
 },
 "bio-2026a-03": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "Une translation (x → x + C) déplace tous les paramètres de position (moyenne, médiane, mode, quartiles) de C, sans changer les paramètres de dispersion. Le nouveau Q1 est Q1 + C.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : EMD 1 Biostatistique Mostaganem 2025/2026 (15/01/2026) - Q3."
 },
 "bio-2026a-04": {
  "A": "Vrai (réponse calculée).",
  "B": "Vrai (réponse calculée).",
  "C": "Faux.",
  "D": "Vrai (réponse calculée).",
  "E": "Faux.",
  "_synthese": "Effectifs : ni = 3, 2, 2, 3, 1, 5, 1 (N = 17). Moyenne 10 donc Σ ni·xi = 170 : 3·X1 + 8 + 12 + 3·X4 + 10 + 5·X6 + 20 = 170, soit 3X1 + 3X4 + 5X6 = 120. Médiane : 9ᵉ valeur = X4 ; mode : plus grand effectif (5) = X6 ; Me + X̄ = Mo donne X4 + 10 = X6. Avec X1 = X4/4 : 0,75·X4 + 3·X4 + 5·(X4 + 10) = 120 → X4 = 8, X1 = 2, X6 = 18. Écart-type : variance = Σ ni(xi − 10)²/17 ≈ 42,82 donc σ ≈ 6,54. Q1 = valeur de rang 5 = 4 ; Q3 = valeur de rang 13 = 18 ; Q3 − Q1 = 14 (l'intervalle interquartile est donc 14, non 10).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : EMD 1 Biostatistique Mostaganem 2025/2026 (15/01/2026) - Q4."
 },
 "bio-2026a-05": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Vrai (réponse calculée).",
  "E": "Faux.",
  "_synthese": "On prend l'amplitude de base a = 5. Amplitudes : 5, 5, 10, 15, 5. Effectif corrigé = effectif / (amplitude/5) : n1' = 2, n2' = 4, n3' = 10/2 = 5, n4' = 9/3 = 3, n5' = 2. Donc C et D sont vraies ; A est fausse (on divise par 2, pas par 5) ; B et E sont fausses.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Les effectifs du tableau totalisent 27 (le sujet annonce 40 femmes) : sans incidence sur la réponse. Source : EMD 1 Biostatistique Mostaganem 2025/2026 (15/01/2026) - Q5."
 },
 "bio-2026a-06": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "Pour des classes inégales on trace un histogramme avec les effectifs corrigés (2, 4, 5, 3, 2) : chaque classe de 10 ou 15 est découpée en tranches de largeur 5. Le graphique C a bien les hauteurs 2, 4, 5, 5, 3, 3, 3, 2 ; A et B utilisent les effectifs bruts (10 et 9) et D est un diagramme en bâtons séparés, qui ne convient pas à des classes continues.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : EMD 1 Biostatistique Mostaganem 2025/2026 (15/01/2026) - Q6."
 },
 "bio-2026a-07": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Vrai (réponse calculée).",
  "_synthese": "Sturges : k = 1 + 3,3·log₁₀N = 1 + log₂N = 1 + 4,91 ≈ 6 (A vrai ; B faux : la formule log₁₀ n'est pas celle de Sturges). Yule : k = 2,5·N^(1/4) = 2,5 × 2,34 ≈ 5,85 ≈ 6 (C vrai ; D oublie le facteur 2,5). Amplitude de classe = (35 − 12)/6 ≈ 3,83, arrondie à 4 (E vrai). On obtient les classes [12,16[, [16,20[, … , [32,36[.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Les propositions reposent sur des arrondis (5,9 ≈ 6 ; 3,83 ≈ 4). Source : EMD 1 Biostatistique Mostaganem 2025/2026 (15/01/2026) - Q7."
 },
 "bio-2026a-08": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "Effectifs des classes d'amplitude 4 : [12,16[ : 3 ; [16,20[ : 6 ; [20,24[ : 5 ; [24,28[ : 6 ; [28,32[ : 7 ; [32,36[ : 3. La classe modale (effectif maximal, classes d'amplitudes égales) est [28, 32[.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : EMD 1 Biostatistique Mostaganem 2025/2026 (15/01/2026) - Q8."
 },
 "bio-2026a-09": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Vrai (réponse calculée).",
  "E": "Faux.",
  "_synthese": "Avec les centres de classes 14, 18, 22, 26, 30, 34 et les effectifs 3, 6, 5, 6, 7, 3 : X̄ = 728/30 ≈ 24,27 (et non 24,4, A faux) ; σ² ≈ 37,0 donc σ ≈ 6,08 (E faux). B est faux (on oublie les effectifs). C est la définition de la variance et D la formule de Koenig : vraies.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). La valeur « 24,4 » de A ne correspond pas aux données (moyenne par classes = 24,27). Source : EMD 1 Biostatistique Mostaganem 2025/2026 (15/01/2026) - Q9."
 },
 "bio-2026a-10": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "Effectifs cumulés : 3, 9, 14, 20, 27, 30. Q1 : N/4 = 7,5 → classe [16,20[ : 16 + (7,5 − 3)/6 × 4 = 19 (A vrai). Médiane : N/2 = 15 → classe [24,28[ : 24 + (15 − 14)/6 × 4 = 24,67 (C vrai). B est fausse (dénominateur F2 + F1 incorrect). Q3 : 22,5 → classe [28,32[ : 28 + (22,5 − 20)/7 × 4 ≈ 29,43 (D donne 29,66 : faux) ; E est fausse.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). B, D, E sont écartées par la formule ou la valeur. Source : EMD 1 Biostatistique Mostaganem 2025/2026 (15/01/2026) - Q10."
 },
 "bio-2026a-11": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "On développe la double somme sur i = 2, 3 et j = 1, 2 : A et C sont deux écritures équivalentes (distributivité). B est faux (une somme de produits n'est pas le produit des sommes) et D utilise des indices erronés. Valeur : 5×200 + 10×220 + 4×300 + 17×320 = 1000 + 2200 + 1200 + 5440 = 9840, pas 18000.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : EMD 1 Biostatistique Mostaganem 2025/2026 (15/01/2026) - Q11."
 },
 "bio-2026a-12": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "X̄ = 240, Ȳ = 26, Σ nij·xi·yj / 100 = 6 230, donc Cov = 6 230 − 240×26 = 6 230 − 6 240 = −10 (A vrai, la formule est celle de la covariance). Moyenne conditionnelle de X sachant y = 20 : (3·100 + 10·200 + 17·300)/30 ≈ 246,7, pas 74 (B faux). Moyenne de Y sachant x = 300 : (17·20 + 21·30 + 8·40)/50 = 25,8 (C vrai). Le coefficient de corrélation est r = Cov/(σx·σy) (D faux) et la covariance se divise par l'effectif total n.. (E faux).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : EMD 1 Biostatistique Mostaganem 2025/2026 (15/01/2026) - Q12."
 },
 "bio-2026a-13": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Vrai (réponse calculée).",
  "E": "Faux.",
  "_synthese": "Le signe de la covariance donne le sens de la liaison : positive = variations dans le même sens (A vrai), négative = sens opposés (B faux). Le coefficient r est compris entre −1 et +1 (C faux). Ici σx² = 4400, σy² = 124 et Cov = −10 : r = −10/√(4400×124) ≈ −0,0135, soit une liaison pratiquement nulle (D vrai, E faux).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : EMD 1 Biostatistique Mostaganem 2025/2026 (15/01/2026) - Q13."
 },
 "bio-2025r-01": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Vrai (réponse calculée).",
  "_synthese": "Effectifs : 8, 23, 31, 14, 4 ; amplitude 5 ; classes [77,5 ; 82,5[, [82,5 ; 87,5[, [87,5 ; 92,5[, [92,5 ; 97,5[, [97,5 ; 102,5[. Classe modale = [87,5 ; 92,5[ (effectif 31). Formule du mode : Mo = L1 + d1/(d1 + d2) × a, avec d1 = 31 − 23 = 8, d2 = 31 − 14 = 17. Mo = 87,5 + 8/25 × 5 = 87,5 + 1,6 = 89,10.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : Rattrapage Biostatistique Mostaganem 2024/2025 (14/09/2025) - Q1."
 },
 "bio-2025r-02": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "σ(X) = √127,69 = 11,3 et σ(Y) = √104,04 = 10,2 : ces valeurs sont cohérentes avec les variances. En revanche |Cov(X,Y)| ≤ σ(X)·σ(Y) = 11,3 × 10,2 ≈ 115,3 (inégalité de Cauchy-Schwarz, qui équivaut à |r| ≤ 1). Une covariance de −220 donnerait r ≈ −1,91 : impossible. L'erreur est la covariance.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : Rattrapage Biostatistique Mostaganem 2024/2025 (14/09/2025) - Q2."
 },
 "bio-2025r-03": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Vrai (réponse calculée).",
  "E": "Faux.",
  "_synthese": "Les 3 médecins sont distincts : on affecte un enfant à chacun, ce qui donne A(15,3) = 15 × 14 × 13 = 2730 possibilités (A vrai). 2ᵉ passage : 12 × 11 × 10 = 1320 et non 1400 (B faux). 3ᵉ passage : 9 × 8 × 7 = 504 (C vrai). Chaque tour traite 3 enfants : 15/3 = 5 tours × 25 min = 125 min = 2 h 05 (D vrai).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Interprétation : les médecins sont distincts (arrangements). Source : Rattrapage Biostatistique Mostaganem 2024/2025 (14/09/2025) - Q3."
 },
 "bio-2025r-04": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "Tous les événements réalisés : A ∩ B ∩ C (A vrai ; le complément de A ∪ B ∪ C = aucun ne se réalise, B faux). « Au plus un » est le contraire de « au moins deux » ; « au moins deux » = (A∩B) ∪ (A∩C) ∪ (B∩C), donc « au plus un » = son complément (C vrai). Les événements « au plus un » et « au moins un » sont différents (D faux). « Aucun » s'écrit Ā ∩ B̄ ∩ C̄ = complément de (A ∪ B ∪ C), et non le complément de A ∩ B ∩ C (E faux).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : Rattrapage Biostatistique Mostaganem 2024/2025 (14/09/2025) - Q4."
 },
 "bio-2025r-05": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Vrai (réponse calculée).",
  "E": "Faux.",
  "_synthese": "Tomber malade = A ou B. Pour des événements compatibles et indépendants : P(A ∪ B) = P(A) + P(B) − P(A)P(B) = 0,08 + 0,06 − 0,0048 = 0,1352. (0,14 ignorerait l'intersection.)",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : Rattrapage Biostatistique Mostaganem 2024/2025 (14/09/2025) - Q5."
 },
 "bio-2025r-06": {
  "A": "Faux.",
  "B": "Vrai (réponse calculée).",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "Probabilité de ne pas tomber malade en un an = 1 − 0,1352 = 0,8648. Sur 5 ans (années indépendantes) : 0,8648⁵ ≈ 0,484. Donc P(malade au moins une fois en 5 ans) = 1 − 0,484 ≈ 0,52.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : Rattrapage Biostatistique Mostaganem 2024/2025 (14/09/2025) - Q6."
 },
 "bio-2025r-07": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Vrai (réponse calculée).",
  "E": "Faux.",
  "_synthese": "Pour un comprimé bon, accepté et refusé sont complémentaires : P(refusé | bon) = 1 − 0,98 = 0,02.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : Rattrapage Biostatistique Mostaganem 2024/2025 (14/09/2025) - Q7."
 },
 "bio-2025r-08": {
  "A": "Faux.",
  "B": "Vrai (réponse calculée).",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "Pour un comprimé défectueux, refusé et accepté sont complémentaires : P(accepté | défectueux) = 1 − 0,99 = 0,01.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : Rattrapage Biostatistique Mostaganem 2024/2025 (14/09/2025) - Q8."
 },
 "bio-2025r-09": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "Probabilités totales : P(T−) = P(T−|M−)P(M−) + P(T−|M+)P(M+) = 0,995 × 0,99 + 0,001 × 0,01 = 0,98505 + 0,00001 = 0,98506 ≈ 0,9851.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : Rattrapage Biostatistique Mostaganem 2024/2025 (14/09/2025) - Q9."
 },
 "bio-2025r-10": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "P(T+) = P(T+|M+)P(M+) + P(T+|M−)P(M−) = 0,999 × 0,01 + 0,005 × 0,99 = 0,00999 + 0,00495 = 0,01494. Théorème de Bayes : P(M−|T+) = 0,00495/0,01494 ≈ 0,331 (0,3322 avec P(T+) arrondi à 0,0149). C'est la valeur prédictive négative complémentaire de la VPP : environ une poche positive sur trois n'est pas contaminée.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Valeur exacte 0,3313 ; 0,3322 obtenu avec P(T+) arrondi à 0,0149. Source : Rattrapage Biostatistique Mostaganem 2024/2025 (14/09/2025) - Q10."
 },
 "bio-2025r-11": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "VPP = P(M+|T+) = P(T+|M+)P(M+)/P(T+) = 0,00999/0,01494 ≈ 0,669 (0,6704 avec P(T+) arrondi à 0,0149). Elle est faible malgré une excellente sensibilité, car la prévalence est de seulement 1 %.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : Rattrapage Biostatistique Mostaganem 2024/2025 (14/09/2025) - Q11."
 },
 "bio-2025r-12": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Vrai (réponse calculée).",
  "E": "Faux.",
  "_synthese": "Chaque test est une épreuve de Bernoulli indépendante : X (nombre d'erreurs) ~ B(10 ; 0,02). P(au moins une erreur) = 1 − P(aucune erreur) = 1 − 0,98¹⁰ = 1 − 0,817 = 0,183.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : Rattrapage Biostatistique Mostaganem 2024/2025 (14/09/2025) - Q12."
 },
 "bio-2025r-13": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Vrai (réponse calculée).",
  "_synthese": "Probabilité = 360 000 / 500 000 = 0,72.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : Rattrapage Biostatistique Mostaganem 2024/2025 (14/09/2025) - Q13."
 },
 "bio-2025r-14": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "L'intervalle [21,14 ; 30,86] est centré sur 26 (demi-largeur 4,86) et contient 72 % de la population : Φ(z) = (1 + 0,72)/2 = 0,86, soit z ≈ 1,08. σ = 4,86/1,08 = 4,5.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : Rattrapage Biostatistique Mostaganem 2024/2025 (14/09/2025) - Q14."
 },
 "bio-2025r-15": {
  "A": "Faux.",
  "B": "Vrai (réponse calculée).",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Vrai (réponse calculée).",
  "_synthese": "Moyenne totale = 3 + 4 + 5 = 12 h (B vrai). Variance totale = 1 + 4 + 9 = 14 h² donc σ = √14 ≈ 3,74 h ≈ 3 h 45 min (C vrai ; additionner les écarts-types donnerait 6 h, erreur classique, D faux). P(T < 8,25 h) = P(Z < (8,25 − 12)/3,74) = P(Z < −1) ≈ 0,16 (E vrai).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : Rattrapage Biostatistique Mostaganem 2024/2025 (14/09/2025) - Q15 (aussi tombé dans 1 autre(s) épreuve(s))."
 },
 "bio-2025r-16": {
  "A": "Faux.",
  "B": "Vrai (réponse calculée).",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "Intervalle de confiance d'une proportion : f ± 1,96·√(f(1 − f)/n) = 0,20 ± 1,96 × √(0,16/100) = 0,20 ± 1,96 × 0,04 = 0,20 ± 0,0784. Soit [12,2 % ; 27,8 %], c'est-à-dire [12 % ; 28 %] arrondi à 1 %.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : Rattrapage Biostatistique Mostaganem 2024/2025 (14/09/2025) - Q16."
 },
 "bio-2023a-01": {
  "A": "Vrai (réponse calculée).",
  "B": "Vrai (réponse calculée).",
  "C": "Vrai (réponse calculée).",
  "D": "Vrai (réponse calculée).",
  "E": "Faux.",
  "_synthese": "Équiprobabilité : P(I) = cas favorables / cas possibles = n/N. Les événements I et Ī sont complémentaires : P(Ī) = 1 − n/N = (N − n)/N, et leur réunion est l'événement certain, de probabilité 1 (et non N, qui dépasse 1).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD Biostatistique Mostaganem 2022/2023 (30/05/2023) - Q1 (aussi tombé dans 2 autre(s) épreuve(s))."
 },
 "bio-2023a-02": {
  "A": "Faux.",
  "B": "Vrai (réponse calculée).",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Vrai (réponse calculée).",
  "_synthese": "P(A∪B) = 0,2 + 0,3 − 0,06 = 0,44 (A faux) ; P(C∪B) = 0,25 + 0,3 − 0,15 = 0,40 (B vrai). Indépendance de A et B : 0,2 × 0,3 = 0,06 = P(A∩B) : vrai (C). B et C : 0,3 × 0,25 = 0,075 ≠ 0,15 : non indépendants (D faux). P(C|B) = P(C∩B)/P(B) = 0,15/0,3 = 0,5 (E vrai).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD Biostatistique Mostaganem 2022/2023 (30/05/2023) - Q2 (aussi tombé dans 2 autre(s) épreuve(s))."
 },
 "bio-2023a-03": {
  "A": "Vrai (réponse calculée).",
  "B": "Vrai (réponse calculée).",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Vrai (réponse calculée).",
  "_synthese": "P(A∪B) = P(A) + P(B) − P(A∩B) ≤ P(A) + P(B) (A vrai). P(A|B) = P(A∩B)/P(B) = 0 ⇒ P(A∩B) = 0 : incompatibles (B vrai). Si A ⊂ B, A∩B = A donc P(B|A) = 1 (C vrai) et A ∩ B̄ = ∅ (E vrai). P(A∩B) = P(A)P(B) définit l'indépendance, pas l'incompatibilité : deux événements de probabilité non nulle ne peuvent pas être à la fois indépendants et incompatibles (D faux).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD Biostatistique Mostaganem 2022/2023 (30/05/2023) - Q3."
 },
 "bio-2023a-04": {
  "A": "Faux.",
  "B": "Vrai (réponse calculée).",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "On donne P(infarctus | fumeur) = 0,005 et P(fumeur) = 0,30. Probabilité composée : P(fumeur ∩ infarctus) = P(infarctus | fumeur) × P(fumeur) = 0,005 × 0,30 = 0,0015.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD Biostatistique Mostaganem 2022/2023 (30/05/2023) - Q4 (aussi tombé dans 2 autre(s) épreuve(s))."
 },
 "bio-2023a-05": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "Chez les malades, la proportion de faux négatifs vaut 1 − Se : si Se ≈ 100 %, il y a presque aucun faux négatif (A vrai) ; si Se ≈ 0 %, presque tous les malades sont faux négatifs (B faux). Chez les non-malades, la proportion de faux positifs vaut 1 − Sp : Sp ≈ 100 % donne presque aucun faux positif (C vrai, D faux). La spécificité ne renseigne pas sur les faux négatifs (E faux).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD Biostatistique Mostaganem 2022/2023 (30/05/2023) - Q5 (aussi tombé dans 2 autre(s) épreuve(s))."
 },
 "bio-2023a-06": {
  "A": "Faux.",
  "B": "Vrai (réponse calculée).",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Vrai (réponse calculée).",
  "_synthese": "Tableau 2×2 : malades 100 → VP = 80, FN = 20 ; non malades 100 → FP = 13, VN = 87. L'effectif total est 200 (A faux), VN = 87 (B vrai), VP = 80 et non 100 (C faux), FN = 20 et non 13 (D faux : 13 est le nombre de faux positifs). Sensibilité = VP/(VP + FN) = 80/100 = 80 % (E vrai).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD Biostatistique Mostaganem 2022/2023 (30/05/2023) - Q6 (aussi tombé dans 1 autre(s) épreuve(s))."
 },
 "bio-2023a-07": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Vrai (réponse calculée).",
  "_synthese": "La somme des probabilités vaut 1 : P(X=3) = 1 − 0,3 − 0,4 = 0,3. E(X) = 0,3 + 0,8 + 0,9 = 2 (A vrai). E(X²) = 0,3 + 1,6 + 2,7 = 4,6, donc Var(X) = 4,6 − 2² = 0,6 (B faux : 4,6 est E(X²)) et σ = √0,6 ≈ 0,77 (C faux). P(X > 2) = 1 − F(2) (D faux). F(2) = P(X ≤ 2) = 0,3 + 0,4 = 0,7 (E vrai).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD Biostatistique Mostaganem 2022/2023 (30/05/2023) - Q7 (aussi tombé dans 1 autre(s) épreuve(s))."
 },
 "bio-2023a-08": {
  "A": "Faux.",
  "B": "Vrai (réponse calculée).",
  "C": "Faux.",
  "D": "Vrai (réponse calculée).",
  "E": "Faux.",
  "_synthese": "Une densité vérifie ∫₀¹ f = 1 : ∫₀¹ a(x − x²)dx = a(1/2 − 1/3) = a/6 = 1, donc a = 6 (B vrai). E(X) = ∫₀¹ 6x²(1 − x)dx = 6(1/3 − 1/4) = 1/2 (D vrai) : la densité est symétrique autour de 1/2.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD Biostatistique Mostaganem 2022/2023 (30/05/2023) - Q8 (aussi tombé dans 1 autre(s) épreuve(s))."
 },
 "bio-2023a-09": {
  "A": "Faux.",
  "B": "Vrai (réponse calculée).",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "L'espérance est linéaire : E(aX + bY + c) = aE(X) + bE(Y) + c. Donc E(Z) = 2E(X) − 3E(Y) + 5. Le signe de Y reste négatif et la constante 5 est conservée.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD Biostatistique Mostaganem 2022/2023 (30/05/2023) - Q9 (aussi tombé dans 1 autre(s) épreuve(s))."
 },
 "bio-2023a-10": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Vrai (réponse calculée).",
  "_synthese": "Pour X et Y indépendantes : Var(aX + bY + c) = a²Var(X) + b²Var(Y). Une constante n'a pas de variance : le « +5 » disparaît, et (−3)² = +9. Var(Z) = 4Var(X) + 9Var(Y).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD Biostatistique Mostaganem 2022/2023 (30/05/2023) - Q10 (aussi tombé dans 1 autre(s) épreuve(s))."
 },
 "bio-2023a-11": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Vrai (réponse calculée).",
  "E": "Faux.",
  "_synthese": "Chaque personne est positive avec p = 0,002, indépendamment des autres : X ~ B(10 000 ; 0,002) (A vrai ; B est impossible car p doit être ≤ 1). Espérance np = 20, variance npq = 20 × 0,998 = 19,96. Comme n est grand et p petit, approximation de Poisson P(20) (D vrai). Comme np = 20 est assez grand, approximation normale N(20 ; √19,96) (C vrai).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD Biostatistique Mostaganem 2022/2023 (30/05/2023) - Q11 (aussi tombé dans 2 autre(s) épreuve(s))."
 },
 "bio-2023a-12": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Vrai (réponse calculée).",
  "_synthese": "Loi de Poisson : P(X = k) = e^(−μ)·μ^k / k! (B inverse μ et k : faux). E(X) = Var(X) = μ (C vrai, D faux). Elle sert pour les événements rares (A vrai). P(X ≥ 1) = 1 − P(X = 0) = 1 − e^(−μ) (E vrai).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD Biostatistique Mostaganem 2022/2023 (30/05/2023) - Q12 (aussi tombé dans 3 autre(s) épreuve(s))."
 },
 "bio-2023a-13": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Vrai (réponse calculée).",
  "E": "Faux.",
  "_synthese": "Un événement rare qui survient en moyenne 2 fois par unité de temps (par an) est modélisé par une loi de Poisson dont le paramètre est la moyenne : μ = 2.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD Biostatistique Mostaganem 2022/2023 (30/05/2023) - Q13 (aussi tombé dans 1 autre(s) épreuve(s))."
 },
 "bio-2023a-14": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "La loi normale est symétrique : moyenne = médiane = mode (A vrai). La courbe 1 est centrée vers 40, non en 0 : ce n'est pas N(0,1) (B faux). La courbe 2 est plus étroite et plus haute, donc son écart-type est plus petit (C vrai). Une densité a toujours une aire de 1 : l'effectif n'est pas représenté (D faux). Les centres sont différents (40 et 60) (E faux).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD Biostatistique Mostaganem 2022/2023 (30/05/2023) - Q14 (aussi tombé dans 1 autre(s) épreuve(s))."
 },
 "bio-2023a-15": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "N(0,1) a pour moyenne 0 et variance 1 (A vrai, B inversé). Toute variable X ~ N(μ,σ) se ramène à N(0,1) par Z = (X − μ)/σ (C vrai). Elle n'est pas approchée par une loi de Poisson (D faux) et l'aire totale sous la courbe d'une densité vaut 1, non l'infini (E faux).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD Biostatistique Mostaganem 2022/2023 (30/05/2023) - Q15."
 },
 "bio-2023a-16": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Vrai (réponse calculée).",
  "E": "Faux.",
  "_synthese": "x̄ est l'estimateur sans biais de μ (A vrai). La validité exige n·p ≥ 5 et n(1 − p) ≥ 5, pas < 5 (B faux). L'erreur standard décroît en 1/√n : plus n est grand, plus la précision est grande (C vrai), et l'IC dépend de n (D vrai). Un intervalle plus large correspond à un niveau de confiance plus élevé, donc à un risque d'erreur plus faible (E faux).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD Biostatistique Mostaganem 2022/2023 (30/05/2023) - Q16."
 },
 "bio-2023b-01": {
  "A": "Faux.",
  "B": "Vrai (réponse calculée).",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "Cas possibles : C(18,3) = 816. Cas favorables : 3 flacons O : C(11,3) = 165 ; 3 flacons A : C(4,3) = 4 ; B et AB impossibles (moins de 3 flacons). P = (165 + 4)/816 = 169/816 ≈ 0,207, soit entre 0,200 et 0,300.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ TD contrôle Biostatistique Mostaganem 2022/2023 (30/06/2023) - Q1."
 },
 "bio-2023b-02": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Vrai (réponse calculée).",
  "_synthese": "Événement contraire : aucun flacon de groupe A, soit 3 flacons parmi les 14 non A : C(14,3) = 364. P(au moins un A) = 1 − 364/816 ≈ 1 − 0,446 = 0,554, supérieur à 0,500.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ TD contrôle Biostatistique Mostaganem 2022/2023 (30/06/2023) - Q2."
 },
 "bio-2023b-03": {
  "A": "Vrai (réponse calculée).",
  "B": "Vrai (réponse calculée).",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Vrai (réponse calculée).",
  "_synthese": "Probabilités totales : P(douleur) = 0,06 + 0,045 + 0,025 + 0,008 = 0,138 (A vrai ; D calcule en réalité P(pas de douleur) = 0,862 : faux). La sensibilité du signe est P(douleur | appendicite) = 0,9 (B vrai). VPP = P(appendicite | douleur) = 0,045/0,138 ≈ 0,326 (C vrai, formule de Bayes). Maladies exclusives : P(diarrhée ∪ appendicite) = 0,30 + 0,05 = 0,35 (E vrai).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ TD contrôle Biostatistique Mostaganem 2022/2023 (30/06/2023) - Q3."
 },
 "bio-2023b-04": {
  "A": "Faux.",
  "B": "Vrai (réponse calculée).",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "E(Y) = 3×3 − 1 = 8 (B vrai). Var(Y) = 3² × Var(X) = 9 (la constante −1 ne change pas la variance) (C vrai). Var(Y/2) = 9/4, pas 7/4 (A faux). E(X − Y) = 3 − 8 = −5 : négative et non nulle (D, E faux).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ TD contrôle Biostatistique Mostaganem 2022/2023 (30/06/2023) - Q4."
 },
 "bio-2023b-05": {
  "A": "Faux.",
  "B": "Vrai (réponse calculée).",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "X ~ B(10 ; 0,4) (une Bernoulli n'a qu'une seule épreuve : A faux). P(X=2) = C(10,2)·0,4²·0,6⁸ = 45 × 0,16 × 0,0168 ≈ 0,121 (B vrai). P(X ≥ 3) = 1 − [P(0) + P(1) + P(2)] = 1 − (0,006 + 0,040 + 0,121) ≈ 0,833 : plus de 75 % (C vrai) mais moins de 90 % (D faux).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ TD contrôle Biostatistique Mostaganem 2022/2023 (30/06/2023) - Q5."
 },
 "bio-2023b-06": {
  "A": "Vrai (réponse calculée).",
  "B": "Vrai (réponse calculée).",
  "C": "Vrai (réponse calculée).",
  "D": "Vrai (réponse calculée).",
  "E": "Faux.",
  "_synthese": "X ~ B(200 ; 0,01) (A vrai) : E(X) = np = 2 (B vrai), V(X) = npq = 200 × 0,01 × 0,99 = 1,98 (C vrai). Avec Poisson de paramètre 2 : P(X=2) = e⁻²·2²/2! = 2e⁻² = 2/e² (D vrai). L'approximation normale demande np ≥ 5 (ici np = 2) : elle n'est pas valable ; en outre la variance serait 2 et non 2² (E faux).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ TD contrôle Biostatistique Mostaganem 2022/2023 (30/06/2023) - Q6."
 },
 "bio-2023b-07": {
  "A": "Vrai (réponse calculée).",
  "B": "Vrai (réponse calculée).",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Vrai (réponse calculée).",
  "_synthese": "Attention aux unités : σ = 3000 g = 3 kg. 67 et 73 kg sont à ±1σ : P = 0,6826 (A vrai). 64 et 76 kg sont à ±2σ : environ 95 % (B vrai). P(X < 68) = Φ((68 − 70)/3) = Φ(−0,67) ≈ 0,25 : C vrai (valeur de l'ordre de 0,25), D faux (0,5546 est impossible pour une valeur inférieure à la moyenne). P(X > 70) = 0,5 par symétrie (E vrai).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). C repose sur une lecture de table z = 0,66 (valeur exacte 0,2525 ; table avec z = 0,67 : 0,2514). Source : 2ᵉ TD contrôle Biostatistique Mostaganem 2022/2023 (30/06/2023) - Q7."
 },
 "bio-2023b-08": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Vrai (réponse calculée).",
  "E": "Faux.",
  "_synthese": "Nombre de malades X ~ B(500 ; 0,05) : E(X) = 500 × 0,05 = 25 (C vrai ; A et B faux). σ = √(500 × 0,05 × 0,95) = 4,87. Approximation normale N(25 ; 4,87) : P(X ≤ 15) = Φ((15 − 25)/4,87) = Φ(−2,05) ≈ 0,02. Il y a donc environ 2 % de chances que 15 lits suffisent (D vrai, E faux).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ TD contrôle Biostatistique Mostaganem 2022/2023 (30/06/2023) - Q8."
 },
 "bio-2023b-09": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "Intervalle de fluctuation : p ± 1,96·√(p(1 − p)/n) = 0,10 ± 1,96 × 0,03 = 0,10 ± 0,0588. Conditions réunies (np = 10 ≥ 5 et n(1 − p) = 90 ≥ 5). Intervalle : [4,12 % ; 15,88 %].",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ TD contrôle Biostatistique Mostaganem 2022/2023 (30/06/2023) - Q9 (aussi tombé dans 1 autre(s) épreuve(s))."
 },
 "bio-2023b-10": {
  "A": "Faux.",
  "B": "Vrai (réponse calculée).",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "Estimation ponctuelle : x̄ = 720/120 = 6 (B vrai, A faux). Variance estimée : s² = (4377 − 120 × 36)/119 = 57/119 ≈ 0,479 donc s ≈ 0,692 ; erreur standard = 0,692/√120 ≈ 0,063. IC 95 % = 6 ± 1,96 × 0,063 = [5,88 ; 6,12] (C vrai, D faux).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ TD contrôle Biostatistique Mostaganem 2022/2023 (30/06/2023) - Q10."
 },
 "bio-2022b-01": {
  "A": "Vrai (corrigé officiel).",
  "B": "Faux.",
  "C": "Vrai (corrigé officiel).",
  "D": "Vrai (corrigé officiel).",
  "E": "Vrai (corrigé officiel).",
  "_synthese": "A) A ∪ (Ā ∩ B) = (A ∪ Ā) ∩ (A ∪ B) = A ∪ B : vrai. B) A Δ B = (A \\ B) ∪ (B \\ A) exclut A ∩ B, donc ≠ A ∪ B : faux. C) A Δ ∅ = A : vrai. D) (A ∩ B̄) ∪ (B ∩ Ā) est A Δ B ; son complément est (A ∩ B) ∪ (Ā ∩ B̄) : vrai. E) A Δ E = (A \\ E) ∪ (E \\ A) = ∅ ∪ Ā = Ā : vrai.",
  "_remarque": "Source : 2ᵉ EMD Biostatistique Mostaganem 2021/2022 (09/06/2022) - Q1."
 },
 "bio-2022b-02": {
  "A": "Vrai (corrigé officiel).",
  "B": "Vrai (corrigé officiel).",
  "C": "Faux.",
  "D": "Vrai (corrigé officiel).",
  "E": "Vrai (corrigé officiel).",
  "_synthese": "A) A Δ B regroupe les éléments de A ∪ B moins ceux communs, d'où Card(A)+Card(B)−2Card(A∩B) : vrai. B) A \\ B = ∅ signifie exactement A ⊂ B : vrai. C) (A ∩ B) \\ (A ∪ B) = ∅ car A ∩ B ⊂ A ∪ B : faux (A Δ B = (A ∪ B) \\ (A ∩ B)). D) Contraposée : vrai. E) Ā Δ B̄ = (Ā \\ B̄) ∪ (B̄ \\ Ā) = (B \\ A) ∪ (A \\ B) = A Δ B : vrai.",
  "_remarque": "Source : 2ᵉ EMD Biostatistique Mostaganem 2021/2022 (09/06/2022) - Q2."
 },
 "bio-2022b-03": {
  "A": "Faux.",
  "B": "Vrai (clé retenue).",
  "C": "Vrai (clé retenue).",
  "D": "Vrai (clé retenue).",
  "E": "Vrai (clé retenue).",
  "_synthese": "A) Faux : B et Ā peuvent être indépendants (c'est le cas si A et B le sont). B) Si A ⊂ B : P(A∩B) = P(A), alors que P(A)·P(B) < P(A) dès que P(A) > 0 et P(B) < 1 : donc non indépendants (retenu au corrigé). C) Vrai : l'indépendance se transmet aux complémentaires. D) Vrai : P(A|B) = P(A) équivaut à P(A∩B) = P(A)P(B). E) Vrai : P(A|B̄) = P(A) implique aussi l'indépendance de A et B.",
  "_remarque": "Proposition B : vraie sauf cas dégénérés (P(A) = 0 ou P(B) = 1) ; corrigé officiel conservé. Source : 2ᵉ EMD Biostatistique Mostaganem 2021/2022 (09/06/2022) - Q3."
 },
 "bio-2022c-04": {
  "A": "Vrai (corrigé officiel).",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "Soit S = surpoids, H = hyperuricémie. P(H) = 0,15 ; P(H|S) = 2 × 0,15 = 0,30 ; P(S) = 0,20. Théorème de Bayes : P(S|H) = P(H|S)·P(S)/P(H) = 0,30 × 0,20 / 0,15 = 0,4.",
  "_remarque": "Source : Contrôle (2ᵉ TD) Biostatistique Mostaganem 2021/2022 (09/06/2022) - Q4."
 },
 "bio-2022c-05": {
  "A": "Vrai (corrigé officiel).",
  "B": "Vrai (corrigé officiel).",
  "C": "Faux.",
  "D": "Vrai (corrigé officiel).",
  "E": "Faux.",
  "_synthese": "Indépendance : P(X=x, Y=y) = P(X=x)·P(Y=y). Ligne Y=1 : 0,2×0,4 = 0,08 ; 0,4×0,4 = 0,16 ; 0,16 ; total 0,4. Ligne Y=2 : 0,12 ; 0,24 ; 0,24 ; total 0,6. La somme de toutes les probabilités vaut 1 (A), la dernière ligne (totaux par colonne) est la loi marginale de X et non de Y (C faux). E est incohérente avec les lois données.",
  "_remarque": "Source : Contrôle (2ᵉ TD) Biostatistique Mostaganem 2021/2022 (09/06/2022) - Q5."
 },
 "bio-2022c-06": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Vrai (corrigé officiel).",
  "D": "Vrai (corrigé officiel).",
  "E": "Vrai (corrigé officiel).",
  "_synthese": "S prend les valeurs 1, 2, 3, 4 (min 0+1, max 2+2) : A faux. P(S=2) = P(0,2) + P(1,1) = 0,12 + 0,16 = 0,28, mais P(S=3) = P(1,2) + P(2,1) = 0,24 + 0,16 = 0,40 : B faux. E(X) = 1,2 et E(Y) = 1,6 donc E(S) = 2,8 (C, D vrais : l'espérance est toujours additive). Comme X et Y sont indépendantes, V(S) = V(X) + V(Y) (E vrai).",
  "_remarque": "Source : Contrôle (2ᵉ TD) Biostatistique Mostaganem 2021/2022 (09/06/2022) - Q6."
 },
 "bio-2022c-07": {
  "A": "Faux.",
  "B": "Vrai (corrigé officiel).",
  "C": "Vrai (corrigé officiel).",
  "D": "Vrai (corrigé officiel).",
  "E": "Faux.",
  "_synthese": "p = P(groupe A) = 38,1 + 7,2 = 45,3 % = 0,453. X suit une loi binomiale B(10 ; 0,453). E(X) = np = 4,53 (A faux). V(X) = npq = 10 × 0,453 × 0,547 ≈ 2,477 (B vrai). P(X=4) = C(10,4)·0,453⁴·0,547⁶ ≈ 0,236 (C vrai). P(X>0) = 1 − 0,547¹⁰ ≈ 0,997 (D vrai). Poisson convient pour p petit et n grand : ici n = 10 et p = 0,45, donc non (E faux).",
  "_remarque": "Source : Contrôle (2ᵉ TD) Biostatistique Mostaganem 2021/2022 (09/06/2022) - Q7."
 },
 "bio-2022c-08": {
  "A": "Vrai (corrigé officiel).",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "Le nombre de bactéries dans 1 ml suit une loi de Poisson de paramètre λ = 100/10 = 10. P(X > 12) = 1 − P(X ≤ 12) = 1 − 0,7916 ≈ 0,208 ≈ 0,21.",
  "_remarque": "Source : Contrôle (2ᵉ TD) Biostatistique Mostaganem 2021/2022 (09/06/2022) - Q8."
 },
 "bio-2022c-09": {
  "A": "Vrai (corrigé officiel).",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "Probabilité = effectif favorable / effectif total = 360 000 / 500 000 = 0,72.",
  "_remarque": "Source : Contrôle (2ᵉ TD) Biostatistique Mostaganem 2021/2022 (09/06/2022) - Q9."
 },
 "bio-2022c-10": {
  "A": "Faux.",
  "B": "Vrai (corrigé officiel).",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "L'intervalle [21,14 ; 30,86] est symétrique autour de la moyenne 26 (demi-largeur 4,86). P(|Z| < z) = 0,72 donne Φ(z) = 0,86, soit z ≈ 1,08. Donc σ = 4,86 / 1,08 = 4,5.",
  "_remarque": "Source : Contrôle (2ᵉ TD) Biostatistique Mostaganem 2021/2022 (09/06/2022) - Q10."
 },
 "bio-2022c-11": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Vrai (corrigé officiel).",
  "_synthese": "La sensibilité est la proportion de malades déclarés positifs : on veut que 97 % des malades aient un taux supérieur au seuil s. P(X > s) = 0,97 donc P(Z < −z) = 0,03, soit z = 1,88 (table). s = 40 − 1,88 × 3,5 = 40 − 6,58 = 33,42.",
  "_remarque": "Source : Contrôle (2ᵉ TD) Biostatistique Mostaganem 2021/2022 (09/06/2022) - Q11."
 },
 "bio-2022c-12": {
  "A": "Faux.",
  "B": "Vrai (corrigé officiel).",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "Moyenne : 720/120 = 6. Variance estimée : s² = (ΣX² − n·x̄²)/(n−1) = (4377 − 120×36)/119 = 57/119 ≈ 0,479 donc s ≈ 0,692. Grand échantillon : IC95 % = x̄ ± 1,96·s/√n = 6 ± 1,96 × 0,692/10,95 = 6 ± 0,124, soit [5,88 ; 6,12].",
  "_remarque": "Source : Contrôle (2ᵉ TD) Biostatistique Mostaganem 2021/2022 (09/06/2022) - Q12."
 },
 "bio-2021-03": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Vrai (réponse calculée).",
  "E": "Faux.",
  "_synthese": "Si A ⊂ F : A ∩ F = A et A ∪ F = F. Donc P(A ∩ F) = P(A) (C vrai) et P(A ∪ F) = P(F) (D vrai). Si A se réalise, F se réalise forcément : P(F|A) = P(A ∩ F)/P(A) = 1 (A vrai). En revanche P(A|F) = P(A)/P(F) < 1 en général (B faux) et P(A ∩ F) = P(A) ≠ 0 (E faux).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD Biostatistique Mostaganem 2020/2021 (28/06/2021) - Q3 (aussi tombé dans 1 autre(s) épreuve(s))."
 },
 "bio-2019-03": {
  "A": "Faux.",
  "B": "Vrai (réponse calculée).",
  "C": "Faux.",
  "D": "Vrai (réponse calculée).",
  "E": "Faux.",
  "_synthese": "A et B indépendantes signifie P(B|A) = P(B) = P(B|Ā) : avoir A ne modifie pas la probabilité d'avoir B (B vrai), et réciproquement pour A selon B (D vrai). Indépendance n'est pas incompatibilité : deux maladies indépendantes peuvent coexister (A faux) et n'implique aucune association systématique (C faux). E exigerait P(B) = 0,5, ce qui n'est pas donné.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD / TD contrôle Biostatistique Mostaganem 2019/2020 (27/10/2020) - Q3."
 },
 "bio-2019-05": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Vrai (réponse calculée).",
  "_synthese": "Sensibilité 98 % : sur 1000 malades, 980 sont dépistés (A vrai, B confond avec la spécificité). Sur 1000 personnes : 10 malades (VP = 9,8 ≈ 10) et 990 non malades ; faux positifs = 990 × (1 − 0,90) = 99 (E vrai, D faux). Le test classe donc ≈ 9,8 + 99 ≈ 109 personnes comme malades, non 139 (C faux).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD / TD contrôle Biostatistique Mostaganem 2019/2020 (27/10/2020) - Q5."
 },
 "bio-2019-07": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Vrai (réponse calculée).",
  "E": "Faux.",
  "_synthese": "La loi normale est une loi continue (A vrai). Les définitions de B sont inversées : centrée signifie moyenne 0 ; réduite signifie variance (écart-type) 1 (B faux). L'intervalle [−2 ; +2] ne contient 95 % que pour la loi centrée réduite ; pour N(m, σ) c'est [m − 1,96σ ; m + 1,96σ] (C faux). Un σ plus petit concentre la masse autour de la moyenne (D vrai). L'aire sous la courbe de densité vaut 1 (E faux).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD / TD contrôle Biostatistique Mostaganem 2019/2020 (27/10/2020) - Q7."
 },
 "bio-2019-09": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Vrai (réponse calculée).",
  "E": "Faux.",
  "_synthese": "Un écart entre moyenne d'échantillon et moyenne de population peut venir des fluctuations d'échantillonnage : on ne peut donc pas conclure à la non-représentativité (A faux), mais le tirage au sort ne garantit pas non plus un résultat représentatif (B faux). On peut construire un intervalle de confiance à 5 % de risque à partir de l'échantillon (C vrai), et x̄ est l'estimation ponctuelle de μ (D vrai). La variance de la population n'a pas besoin d'être connue : on utilise l'écart-type de l'échantillon (E faux).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD / TD contrôle Biostatistique Mostaganem 2019/2020 (27/10/2020) - Q9."
 },
 "bio-2019-10": {
  "A": "Faux.",
  "B": "Vrai (clé retenue).",
  "C": "Vrai (clé retenue).",
  "D": "Faux.",
  "E": "Vrai (clé retenue).",
  "_synthese": "Erreur standard : 0,03 / √31 ≈ 0,00539 (B vrai). IC 95 % = 0,8 ± 1,96 × 0,00539 = [0,7894 ; 0,8106] (C vrai, D faux). Si σ de la population est connue, σ_X̄ = σ/√n (E vrai). La formule de A est correcte pour un écart-type descriptif, mais le corrigé officiel de cette même question ne la retient pas.",
  "_remarque": "Clé identique au corrigé officiel de la 2ᵉ EMD 2021/2022 (même question). Source : 2ᵉ EMD / TD contrôle Biostatistique Mostaganem 2019/2020 (27/10/2020) - Q10 (aussi tombé dans 1 autre(s) épreuve(s))."
 },
 "bio-2019-11": {
  "A": "Faux.",
  "B": "Vrai (réponse calculée).",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Faux.",
  "_synthese": "Tirage simultané (sans remise) : P = C(10,2)/C(80,2) = 45/3160 ≈ 0,0142.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD / TD contrôle Biostatistique Mostaganem 2019/2020 (27/10/2020) - Q11."
 },
 "bio-2019-12": {
  "A": "Faux.",
  "B": "Faux.",
  "C": "Faux.",
  "D": "Faux.",
  "E": "Vrai (réponse calculée).",
  "_synthese": "Les deux vaccins doivent être pris parmi les 70 non périmés : P = C(70,2)/C(80,2) = 2415/3160 ≈ 0,7642.",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD / TD contrôle Biostatistique Mostaganem 2019/2020 (27/10/2020) - Q12."
 },
 "bio-2019-15": {
  "A": "Vrai (réponse calculée).",
  "B": "Vrai (réponse calculée).",
  "C": "Faux.",
  "D": "Vrai (réponse calculée).",
  "E": "Faux.",
  "_synthese": "P(T+) = 0,01 × 0,9 + 0,99 × 0,2 = 0,009 + 0,198 = 0,207 (A vrai). VPP = 0,009/0,207 ≈ 4,3 % < 5 % (B vrai). Un test de dépistage doit être sensible : A (Se 90 %) convient mieux que B (85 %) (C faux). Un test de confirmation doit être spécifique : B (Sp 85 %) est meilleur que A (80 %) (D vrai). Parmi les positifs adressés à l'hôpital, la fréquence de la maladie est la VPP ≈ 4,3 %, non 1 % (E faux).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD / TD contrôle Biostatistique Mostaganem 2019/2020 (27/10/2020) - Q15."
 },
 "bio-2019-16": {
  "A": "Faux.",
  "B": "Vrai (réponse calculée).",
  "C": "Faux.",
  "D": "Vrai (réponse calculée).",
  "E": "Vrai (réponse calculée).",
  "_synthese": "Une courbe ROC représente la sensibilité (ordonnée, B vrai) en fonction de 1 − spécificité (abscisse, donc A faux). Le point A a pour coordonnées (1 − Sp = 0,1 ; Se = 0,8), soit Se 80 % et Sp 90 % (D vrai, C faux : le point B correspond à Se 10 %, Sp 20 %). Chaque point de la courbe correspond à une valeur seuil du test (E vrai).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD / TD contrôle Biostatistique Mostaganem 2019/2020 (27/10/2020) - Q16."
 },
 "bio-2019-17": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Vrai (réponse calculée).",
  "_synthese": "z(155) = (155 − 169)/5,6 = −2,5 : P(X < 155) = 1 − 0,9938 = 0,0062 = 0,62 % (A vrai, B faux). z(175) = 6/5,6 ≈ 1,07 : Φ = 0,8577, donc P(155 < X < 175) = 0,8577 − 0,0062 ≈ 85,15 % : l'ordre de grandeur de C (85 %) est le bon, D (95,85 %) est impossible. Pour une variable continue, P(X = 155) = 0 (E vrai).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). La valeur « 85,95 % » de C est probablement une coquille pour 85,15 % (valeur calculée). Source : 2ᵉ EMD / TD contrôle Biostatistique Mostaganem 2019/2020 (27/10/2020) - Q17."
 },
 "bio-2019-18": {
  "A": "Vrai (réponse calculée).",
  "B": "Faux.",
  "C": "Vrai (réponse calculée).",
  "D": "Faux.",
  "E": "Vrai (réponse calculée).",
  "_synthese": "Estimation ponctuelle : f = 18/100 = 18 % (A vrai, B faux). IC 95 % : 0,18 ± 1,96 × √(0,18 × 0,82/100) = 0,18 ± 1,96 × 0,0384 = 0,18 ± 0,0753, soit [0,1047 ; 0,2553] (C vrai, D faux). L'approximation normale n'est valable que si les effectifs attendus, n·p et n·(1 − p), valent au moins 5 (E vrai : 18 et 82 ici).",
  "_remarque": "Clé calculée (pas de corrigé dans le PDF). Source : 2ᵉ EMD / TD contrôle Biostatistique Mostaganem 2019/2020 (27/10/2020) - Q18."
 }
};
