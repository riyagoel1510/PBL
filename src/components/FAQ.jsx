import React from 'react';
import './faq.css';

const FAQ = () => {
  return (
    <div className="faq">
      <h1>FAQ</h1>
      <div className="white-box">
        <h3>A. Which type of cybercrimes I can report on the portal?</h3>
        <p>
          There are three options for reporting cybercrimes on the portal:
          <br />
          <strong>1. Report Crime related to Women/ Child:</strong> Under this section, you can report complaints pertaining to online Child Pornography (CP), Child Sexual Abuse Material (CSAM), or sexually explicit content such as Rape/Gang Rape (CP/RGR) content.
          <br />
          <strong>2. Report Financial frauds:</strong> Online financial frauds, cryptocurrency crimes.
          <br />
          <strong>3. Report Other Cybercrimes:</strong> Under this option, you can report complaints pertaining to cybercrimes such as mobile crimes, online and social media crimes, ransomware, hacking, and online cyber trafficking.
        </p>
      </div>
      <div className="white-box">
        <h3>B. What action will be taken if complainant reports any false complaint/information?</h3>
        <p>
          Providing false information could make complainant liable to penal action as per the Indian Penal Code.
        </p>
      </div>
      <div className="white-box">
        <h3>C. Can I report a complaint without uploading any information?</h3>
        <p>
          It is recommended that you provide as much information about the complaint as possible so that the police authorities working on the complaint are able to take appropriate and prompt action.
        </p>
      </div>
      <div className="white-box">
        <h3>D. Apart from this portal, are there any alternative ways to remove objectionable content from social media websites?</h3>
        <p>
          Yes, most of the social media websites like Facebook, YouTube, Twitter, and Instagram etc. have the option of reporting or flagging the objectionable contents. The social media platforms may take appropriate action based on the contents reported to them as per their content policy.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
