import styles from './FavIcon.module.scss';

export default function FavIcon() {
    return (
        <div className={styles.svgWrapper}>
            <svg
                className={styles.favIcon}
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
            >
                <g
                    transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
                    stroke="none"
                >
                    <path d="M2255 9905 c-334 -62 -597 -336 -645 -671 -8 -58 -10 -1243 -8 -4379
l3 -4300 25 -50 c31 -64 98 -131 158 -158 69 -32 198 -31 267 2 41 19 336 310
1557 1530 l1508 1506 1507 -1506 c1684 -1681 1543 -1553 1693 -1553 60 0 86 5
130 25 70 33 126 89 159 159 l26 55 3 4295 c2 3143 0 4316 -8 4375 -49 342
-325 621 -667 674 -112 17 -5613 14 -5708 -4z m5671 -651 c15 -11 37 -33 48
-48 l21 -27 3 -3882 2 -3882 -1342 1342 c-937 935 -1356 1347 -1386 1362 -95
48 -207 48 -298 -1 -23 -12 -597 -577 -1384 -1362 l-1345 -1341 -3 3855 c-1
2120 0 3869 3 3887 7 40 49 91 90 109 25 11 512 13 2797 11 l2767 -2 27 -21z" />
                </g>
            </svg>
        </div>

    );
}
