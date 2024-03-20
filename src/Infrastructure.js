import React, { useState, useEffect } from 'react';
const Infrastructure = () => {
  const [excelData, setExcelData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Assurez-vous que le chemin commence par '/' si le fichier est dans le dossier public
        const response = await fetch('/488lb-3842b.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setExcelData(data);
      } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
      }
    };
    loadData();
  }, []);

  return (
    <div>
      <h1>Données Excel</h1>
      {excelData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Num Paire</th>
              <th>Équipement/client relié</th>
              <th>PDD correspondant/Liaison</th>
            </tr>
          </thead>
          <tbody>
            {excelData.map((row, index) => (
              <tr key={index}>
                <td>{row['Num Paire']}</td>
                <td>{row['Équipement/client relié']}</td>
                <td>{row['PDD correspondant/Liaison']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Aucune donnée à afficher.</p>
      )}
    </div>
  );
};

export default Infrastructure;
