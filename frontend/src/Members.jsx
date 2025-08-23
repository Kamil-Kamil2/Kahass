import "./css/Members.css"
import MComponent from "./MComponent"
import img from './Eyob_.png'
import React, { useState } from 'react';

function Members(){
    return(
        <>
            <div className="membersIntro">
                <h1 className="Mtitle">Members</h1>
                <h4 className="Mdisc">While many people contribute to Kahass, the project is led by the following core directors:</h4>
            </div>
            <div className="grandGrid">
              <MComponent image={null} title="" name="Hilal Ahmed"/>
              <MComponent image={null} title="" name="Abdussemed Kamil"/>
              <MComponent image={null} title="" name="Fozia Hassen"/>
              <MComponent image={img} title="" name="Eyob Kamil Hassen"/>
              <MComponent image={null} title="" name="Hayat Hassen"/>
              <MComponent image={null} title="" name="Seid Kamil"/>
              <MComponent image={null} title="" name="Tasew Kamil"/>
            </div>
        </>
    )
}

export default Members