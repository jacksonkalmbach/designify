import { ImageContainer, SampleImage, SampleImageContainer } from "./Styles";
import sohoImg from "../../shared/assets/soho-loft.jpeg";
import scandiKitchen from "../../shared/assets/scandi-kitchen.jpeg";

const images = [
  sohoImg,
  scandiKitchen,
  "https://media.architecturaldigest.com/photos/645bcb45b5e359cf55d9d108/16:9/w_2240,c_limit/M.Naeve%20Sunset%20Dining%20Nook.jpg",
  "https://media.architecturaldigest.com/photos/65de78abae844eb7145a89ae/master/w_2580%2Cc_limit/OT2233037.jpg",
  "https://media.architecturaldigest.com/photos/65de78a8ac6b39582a1ab9d3/master/w_2580%2Cc_limit/OT2233023.jpg",
  "https://media.architecturaldigest.com/photos/6481fa7547b544bc90783334/16:9/w_2240,c_limit/meredith%20ellis%20design%203.jpeg",
  "https://media.architecturaldigest.com/photos/645bcb45b5e359cf55d9d108/16:9/w_2240,c_limit/M.Naeve%20Sunset%20Dining%20Nook.jpg",
  "https://media.architecturaldigest.com/photos/65de78abae844eb7145a89ae/master/w_2580%2Cc_limit/OT2233037.jpg",
  "https://media.architecturaldigest.com/photos/65de78a8ac6b39582a1ab9d3/master/w_2580%2Cc_limit/OT2233023.jpg",
  "https://media.architecturaldigest.com/photos/6481fa7547b544bc90783334/16:9/w_2240,c_limit/meredith%20ellis%20design%203.jpeg",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.housebeautiful.com%2Fuk%2Fdecorate%2Fg38915529%2Finterior-design-ideas%2F&psig=AOvVaw3EONSmex9_lg0--mpgzs_F&ust=1709443029598000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNDazNbp1IQDFQAAAAAdAAAAABAH",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mydomaine.com%2Finterior-design-styles-5069893&psig=AOvVaw3EONSmex9_lg0--mpgzs_F&ust=1709443029598000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNDazNbp1IQDFQAAAAAdAAAAABAO",
];

const SampleImages = () => {
  return (
    <ImageContainer>
      <SampleImageContainer>
        {images.map((image, index) => (
          <SampleImage key={index} src={image} alt="" />
        ))}
      </SampleImageContainer>
    </ImageContainer>
  );
};

export default SampleImages;
