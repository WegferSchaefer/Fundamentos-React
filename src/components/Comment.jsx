import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment () {
    return (
        <div className={styles.comment}>
          <Avatar src="https://github.com/hoerkley.png" alt="" />
          
          <div className={styles.commentBox}>
            <div className={styles.commentContent}>
              <header>
                <div className={styles.authorAndTime}>
                  <strong>Hoerkley da Silva</strong>
                  <time title="16 de Dezembro ás 17:35h" dateTime="2024-11-03 13:48:30">Cerca de 1h atrás</time>
                </div>

                <button title="Deletar comentário">
                  <Trash size={24}/>
                </button>
              </header>
                <p>Muito bom Wegfer, parabéns !! </p>
            </div>

            <footer>
                <button>
                  <ThumbsUp />
                  Aplaudir <span>20</span>
                </button>
            </footer>
          </div>
        </div>    
   )
}