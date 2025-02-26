import { useDispatch, useSelector } from "react-redux";
import "../styles/index.scss";
import { useEffect } from "react";
import { setIsDarkMode } from "../store/slice/themeSlice";

export const ThemeToggle = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.isDarkMode);

    // 테마 상태가 변경을 할 때마다 <html> 태그에 data-mode 속성을 업데이트
    useEffect(() => {
        document.documentElement.setAttribute(
            "data-mode",
            theme ? "dark" : "light"
        );
    }, [theme]);

    return (
        <>
            <li className="utility-item">
                <button
                    type="button"
                    className="btn-change"
                    aria-label="모드 변경"
                    onClick={() => dispatch(setIsDarkMode())}
                ></button>
            </li>
        </>
    );
};
