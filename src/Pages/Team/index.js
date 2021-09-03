import { Link } from "react-router-dom";

import Image_1 from "@Image/person-1.png";
import Image_2 from "@Image/person-2.png";
import Image_3 from "@Image/person-3.png";
import Image_4 from "@Image/person-4.png";
import Image_5 from "@Image/person-5.png";

import Social_1 from "@Image/social-1.png";
import Social_2 from "@Image/social-2.png";
import Social_3 from "@Image/social-3.png";
import Social_4 from "@Image/social-4.png";
import Social_5 from "@Image/social-5.png";
import Social_6 from "@Image/social-6.png";
import Social_7 from "@Image/social-7.png";

export default function Team() {
  const people = [
    {
      id: 1,
      name: "Michael Williams",
      position: "CEO",
      image: Image_1,
      social: [
        {
          id: 1,
          name: "Twitter",
          image: Social_1,
          link: "#",
        },
        {
          id: 2,
          name: "Facebook",
          image: Social_2,
          link: "#",
        },
        {
          id: 3,
          name: "Web",
          image: Social_3,
          link: "#",
        },
        {
          id: 4,
          name: "Instagram",
          image: Social_4,
          link: "#",
        },
      ],
    },
    {
      id: 2,
      name: "Thomas Sherman",
      position: "CMO",
      image: Image_2,
      social: [
        {
          id: 1,
          name: "Twitter",
          image: Social_1,
          link: "#",
        },
        {
          id: 3,
          name: "Web",
          image: Social_3,
          link: "#",
        },
      ],
    },
    {
      id: 3,
      name: "Miguel Osborne",
      position: "Front-end Developer",
      image: Image_3,
      social: [
        {
          id: 5,
          name: "Skype",
          image: Social_5,
          link: "#",
        },
        {
          id: 6,
          name: "Mail",
          image: Social_6,
          link: "#",
        },
        {
          id: 7,
          name: "Git",
          image: Social_7,
          link: "#",
        },
      ],
    },
    {
      id: 4,
      name: "Taylor Simon",
      position: "Product Manager",
      image: Image_4,
      social: [
        {
          id: 1,
          name: "Twitter",
          image: Social_1,
          link: "#",
        },
        {
          id: 4,
          name: "Instagram",
          image: Social_4,
          link: "#",
        },
      ],
    },
    {
      id: 5,
      name: "Steven MacAlister",
      position: "Copyrighter",
      image: Image_5,
      social: [
        {
          id: 1,
          name: "Twitter",
          image: Social_1,
          link: "#",
        },
      ],
    },
  ];

  return (
    <section className="team bg-primary">
      <h3 className="clr-white">The Team</h3>
      <p className="clr-white">
        The most important part of any product is the team. This can be up to 3
        lines. This can be up to 3 lines. This can be up to 3 lines. This can be
        up to 3 lines.
      </p>
      <div className="team__img">
        {people.map((item, index) => {
          return (
            <div key={index} className="team__person">
              <img src={item.image} alt={item.name} />
              <h5 className="clr-white">{item.name}</h5>
              <h6 className="clr-white">{item.position}</h6>
              <div className="social-media alignCenter">
                {item.social.map((media) => (
                  <Link to={media.link}>
                    <img src={media.image} alt={media.name} />
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
