import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
const Person=({img,name,job,children})=>{
    const url=`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
    return(
      <article className="person">
          <img src={url} />
          <h4>Name:{name}</h4>
          <h3>Job : {job}</h3>
          {children}
      </article>
    )
}
const PeopleList=()=>{
    return(
      <section className="person-list">
          <Person img="1" name="KongRuksiam" job="Programmer">
          <p>Skill : C# JAVA PHP</p>
          </Person>
          <Person img="34" name="Jojo" job="Designer">
          <p>Skill : Photoshop , 3D Model</p>
          </Person>
          <Person img="40" name="Nut" job="Tester">
          <p>Skill : วิเคราะห์และทดสอบระบบ</p>
          </Person>
          <Person img="50" name="Code" job="SA">
          <p>Skill : SA</p>
          </Person>
          <Person img="1" name="KongRuksiam" job="Programmer">
          <p>Skill : C# JAVA PHP</p>
          </Person>
          <Person img="34" name="Jojo" job="Designer">
          <p>Skill : Photoshop , 3D Model</p>
          </Person>
          <Person img="40" name="Nut" job="Tester">
          <p>Skill : วิเคราะห์และทดสอบระบบ</p>
          </Person>
          <Person img="50" name="Code" job="SA">
          <p>Skill : SA</p>
          </Person>
      </section>
    )
}

ReactDOM.render(<PeopleList/>, document.getElementById('root'));
