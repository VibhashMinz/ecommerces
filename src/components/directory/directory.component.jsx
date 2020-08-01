import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Medicine & Health Products",
          imageUrl: "https://i.ibb.co/j6Y8zGD/medicines.jpg",
          id: 1,
          linkUrl: "shop/medicine",
        },
        {
          title: "Grocery",
          imageUrl: "https://i.ibb.co/pxKhQSx/grocery.jpg",
          id: 2,
          linkUrl: "shop/grocery",
        },
        {
          title: "Home Appliances & Luggage",
          imageUrl: "https://i.ibb.co/ThstfDQ/Cooker-banner.jpg",
          id: 3,
          linkUrl: "shop/appliance",
        },
        {
          title: "Clothes",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          size: "large",
          id: 4,
          linkUrl: "shop/clothes",
        },
        {
          title: "Cosmetic Products",
          imageUrl: "https://i.ibb.co/JRfHSck/cosmetics.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/cosmetics",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
