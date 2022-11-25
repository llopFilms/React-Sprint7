import { Item, BotoEsborrar } from "./ItemLlistaStyled";

const ItemLlista = ({ pressupost, esborrarPressupost }) => {
  const {
    id,
    data,
    nomClient,
    nomPressupost,
    web: { actiu: webActiu },
    extres: { pagines, idiomes },
    seo: { actiu: seoActiu },
    ads: { actiu: adsActiu },
    total,
  } = pressupost;

  return (
    <Item>
      <div>
        <li>
          <span>Pressupost número:</span>&nbsp;{id}
        </li>
        <li>
          <span>Data:</span>&nbsp;{data}
        </li>
      </div>
      <div>
        <li>
          <span>Client:</span>&nbsp;<p> {nomClient}</p>
        </li>
        <li>
          <span>Pressupost:&nbsp;</span>
          <p>{nomPressupost}</p>
        </li>
      </div>
      <div>
        <li>
          <span>Serveis:</span>
          <ul>
            {webActiu && (
              <div>
                <li>1 Pàgina web</li>
                <ul>
                  <li>Pàgines:&nbsp;{pagines}</li>
                  <li>Idiomes:&nbsp;{idiomes}</li>
                </ul>
              </div>
            )}
            {seoActiu && <li>1 Consultoria SEO</li>}
            {adsActiu && <li>1 Campanya Google Ads</li>}
          </ul>
        </li>
      </div>
      <li>
        <div>
          <div>
            <span>Total:</span>&nbsp;
            {total}&nbsp;€
          </div>
          <BotoEsborrar onClick={(e) => esborrarPressupost(id)}>Esborrar Pressupost</BotoEsborrar>
        </div>
      </li>
    </Item>
  );
};

export default ItemLlista;
