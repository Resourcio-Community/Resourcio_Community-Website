/* ----------------------------------------- */
import c from '../../Images/topic/C.jpg'
import python from '../../Images/topic/python.png'
import java from '../../Images/topic/java.jpg'
import cpp from '../../Images/topic/C++.jpeg'
import csharp from '../../Images/topic/Csharp.jpeg'
import go from '../../Images/topic/golang.png'
/* ---------------------------------------- */
import './proglang.css'
import { Helmet } from 'react-helmet'
import ResourceCard from '../../component/resourceCard/ResourceCard'


const Proglang = () => {
  return (
    <div className='proglang'>
      <Helmet>
        <title>Programming Languages</title>
      </Helmet>

      <div className="card_container">
        <ResourceCard
          image={c}
          title='C'
          content='C is a general-purpose computer programming language.'
          href='https://github.com/Resourcio-Community/C-language-resources'
        />
        <ResourceCard
          image={cpp}
          title='C++'
          content='C++ is a powerful general-purpose programming language. It can be used to develop operating systems, browsers, games, and so on.'
          href='https://github.com/Resourcio-Community/Cpp-language-resources'
        />
        <ResourceCard
          image={python}
          title='Python'
          content='Python is a high-level, general-purpose programming language.'
          href='https://github.com/Resourcio-Community/Python-resources'
        />
        <ResourceCard
          image={java}
          title='Java'
          content='Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.'
          href='https://github.com/Resourcio-Community/JAVA-resources'
        />
        <ResourceCard
          image={csharp}
          title='C#'
          content='C# is a general-purpose, high-level multi-paradigm programming language.'
          href='https://github.com/Resourcio-Community/C_Sharp-Resources'
        />
        {/* <ResourceCard
          image={go}
          title='Go'
          content='Go is an open source programming language that makes it simple to build secure, scalable systems.'
          href='https://github.com/Resourcio-Community/Go-lang-resources'
        /> */}
      </div>
    </div>
  )
}

export default Proglang