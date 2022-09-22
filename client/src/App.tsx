import "react-toastify/dist/ReactToastify.css";

import { useQuery } from "react-query";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { fetchUserInfos } from "./apis/user/login";
import { Modal, SharedLayout } from "./components";
import {
  Login,
  Main,
  Mypage,
  NewPlace,
  NewPost,
  PlaceList,
  PostList,
  Search,
  Signup,
} from "./pages";
import {
  logOutUser,
  selectUser,
  setUserInfos,
  useAppDispatch,
  useAppSelector,
} from "./redux";

const App = () => {
  const dispatch = useAppDispatch();
  const { loginStatus } = useAppSelector(selectUser);

  // 메인 페이지 로드 후 로그인 상태 확인
  useQuery(["authUser", loginStatus], fetchUserInfos, {
    enabled: loginStatus,
    staleTime: 6 * 60 * 1000, // 6시간
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      dispatch(setUserInfos(data));
    },
    onError: (err) => {
      console.log(err);
      dispatch(logOutUser());
    },
  });

  console.log("loginStatus 상태 확인", loginStatus);

  return (
    <>
      <Modal width="600px" height="max-content" borderRadius="3px" background>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/place/new" element={<NewPlace />} />
            <Route path="/place/list" element={<PlaceList />} />
            <Route path="/post/new" element={<NewPost />} />
            <Route path="/post/list" element={<PostList />} />
            <Route path="/search/*" element={<Search />} />
          </Route>
        </Routes>
      </Modal>
      <ToastContainer position="top-center" pauseOnFocusLoss theme="colored" />
    </>
  );
};

// post/new
// post/edit
// post/list
// post/detail

export default App;
