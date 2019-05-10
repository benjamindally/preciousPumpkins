import React, { Component } from "react";
import "./about.css";
import Info from "../info-card/Info";

class About extends Component {
  render() {
    return (
      <div>
        <div className="basic_text_area padding20px">
          <h1 className="text-center">The Precious Pumpkin's Story</h1>
          <p className="basic_paragraph text-indent">
            My name is Kathy Ramirez. Like many people, I had a job that I
            didn't really connect with. It's not that I hated it, but it just
            didn't feel like "me."
          </p>
          <p className="basic_paragraph text-indent">
            One day, I decided to help out some friends by watching a few of
            their kids in one big group. Having raised four wonderful children
            of my own, I thought, "how hard could it be?"
          </p>
          <p className="basic_paragraph text-indent">
            I got to the end of the day and my husband, Miguel, came home. I was
            sitting on the floor, surrounded by children playing, and I just
            started crying. My husband asked if I was ok, and I looked at him
            and said, "I'm just so happy. I loved every minute of my day with
            these kids."
          </p>
          <p className="basic_paragraph text-indent">
            That's when I knew that I would have to become a childcare provider.
            Helping children grow and learn is what I do and who I am. I still
            have that same sense of joy, that same sense of wonder day in and
            day out as I care for the little precious pumpkins
          </p>
        </div>
        <Info />
        <div className="basic_text_area padding20px">
          <h1 className="text-center">Philosophy and Services</h1>
          <p className="basic_paragraph text-indent">
            Here at Precous Pumpkins, we take care of all your child's needs.
            Your tuition includes breakfast, lunch, snack, diapers, and a whole
            lot of hugs.
          </p>
          <p className="basic_paragraph text-indent">
            We engage in fun, interactive games and songs, help with potty
            training, and provide as much support as possible. We have an open
            door policy, so come any time you like.
          </p>
          <p>
            <strong>Hours</strong>: 7am-5:30pm Monday-Friday
          </p>
        </div>
      </div>
    );
  }
}

export default About;
