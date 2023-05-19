/** Componente Header */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/header.module.css';

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href={'/'} legacyBehavior>
          <Image
            src={'/img/logo.svg'}
            width={300}
            height={40}
            alt='imagen logotipo'
          />
        </Link>

        <nav className={styles.navegacion}>
          <Link href='/' legacyBehavior>
            <a className={router.pathname === '/' ? styles.active : ''}>
              Inicio
            </a>
          </Link>

          <Link href='/nosotros' legacyBehavior>
            <a className={router.pathname === '/nosotros' ? styles.active : ''}>
              Nosotros
            </a>
          </Link>

          <Link href='/tienda' legacyBehavior>
            <a className={router.pathname === '/tienda' ? styles.active : ''}>
              Tienda
            </a>
          </Link>

          <Link href='/blog' legacyBehavior>
            <a className={router.pathname === '/blog' ? styles.active : ''}>
              Blog
            </a>
          </Link>

          <Link href='/carrito' legacyBehavior>
            <a>
              {/* <Image
                width={30}
                height={25}
                src='/img/carrito.png'
                alt='Imagen carrito'
              /> */}
              <svg
                className='icon icon-tabler icon-tabler-shopping-cart'
                width='32'
                height='32'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0 0h24v24H0z' fill='none' stroke='none' />
                <path d='m6 19m-2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0' />
                <path d='m17 19m-2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0' />
                <path d='m17 17h-11v-14h-2' />
                <path d='m6 5 14 1-1 7h-13' />
              </svg>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
