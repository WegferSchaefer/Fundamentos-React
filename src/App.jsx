import { Header } from './components/Header';
import { Post } from './components/Post.jsx';
import { Sidebar } from './components/Sidebar.jsx';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
     <div>
     <Header/>

      <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post 
              author="Wegfer Schaefer" 
              content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas neque consectetur tenetur minima, voluptate quam saepe et, repudiandae eveniet pariatur ad quia veritatis! Cupiditate quod voluptates, quisquam maxime tenetur sint."
            />
            <Post
              author="Hoerkley da Silva"
              content="Um novo post muito legal"
            />  
          </main>  
      
      </div>    
    </div>
  )
}

