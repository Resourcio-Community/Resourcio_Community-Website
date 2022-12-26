/* ----------------------------------------- */
import c from '../../Images/c.png'
import cpp from '../../Images/ISO_C++_Logo.svg.png'
import python from '../../Images/python.png'
import java from '../../Images/java-logo-vert-blk.png'
import csharp from '../../Images/C-Sharp.png'
import rust from '../../Images/Rust.png'
import R from '../../Images/r.jpg'
import go from '../../Images/golang.png'
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
        <ResourceCard
          image={rust}
          title='Rust'
          content='Rust is a multi-paradigm, general-purpose programming language.'
          href='https://github.com/Resourcio-Community/Rust-resources'
        />
        <ResourceCard
          image={R}
          title='R'
          content='R is a programming language for statistical computing and graphics supported by the R Core Team and the R Foundation for Statistical Computing.'
          href='https://github.com/Resourcio-Community/R-resources'
        />
        <ResourceCard
          image={go}
          title='Go'
          content='Go is an open source programming language that makes it simple to build secure, scalable systems.'
          href='https://github.com/Resourcio-Community/Go-lang-resources'
        />
      </div>
    </div>
  )
}

export default Proglang