// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
// import BaiViet from './BaiViet';
// import { isCloseToBottom } from '../Utils/Tobottom';
// import APIs, { authAPI, endpoints } from '../../configs/APIs';
// import debounce from 'lodash.debounce';


// const BanTin = () => {
//     const [q, setQ] = useState('');
//     const [baiViets, setBaiViets] = useState([]);
//     const [page, setPage] = useState(1);
//     const [loading, setLoading] = useState(false);
//     const [refreshing, setRefreshing] = useState(false);
//     const scrollContainerRef = useRef(null);

//     const loadBaiViets = useCallback(async () => {
//         console.log("Page", page);
//         try {
//             setLoading(true);
//             let baiviets = await authAPI().get(`${endpoints['bai_viet']}?page=${page}`);

//             if (baiviets.data.next === null) {
//                 setPage(0);
//             }
//             if (page === 1) {
//                 setBaiViets(baiviets.data.results);
//             } else {
//                 setBaiViets(current => {
//                     return [...current, ...baiviets.data.results];
//                 });
//             }

//         } catch (ex) {
//             console.log("Lỗi", ex);
//         } finally {
//             setLoading(false);
//         }
//     }, [page]);

//     const handleSearch = useCallback(
//         debounce(async (query) => {
//             setPage(1);
//             try {
//                 setLoading(true);
//                 let baiviets = await authAPI().get(`${endpoints['bai_viet']}?q=${query}`);
//                 console.log(baiviets.data);
//                 if (baiviets.data.count === 0) {
//                     setBaiViets([]);
//                 } else {
//                     setBaiViets(baiviets.data.results);
//                 }
//             } catch (ex) {
//                 console.log("Lỗi", ex);
//             } finally {
//                 setLoading(false);
//             }
//         }, 300),
//         []
//     );

//     useEffect(() => {
//         handleSearch(q);
//     }, [q, handleSearch]);

//     useEffect(() => {
//         loadBaiViets();
//     }, [loadBaiViets, page]);

//     const loadMore = () => {
//         if (!loading && page > 0 && scrollContainerRef.current && isCloseToBottom(scrollContainerRef.current)) {
//             setPage(page + 1);
//         }
//     };

//     // const handleRefresh = useCallback(() => {
//     //     setRefreshing(true);
//     //     setPage(1);
//     //     loadBaiViets().then(() => setRefreshing(false));
//     // }, [loadBaiViets]);

//     const handleTextChange = (event) => {
//         setQ(event.target.value);
//     };

//     return (
//         <Container onScroll={loadMore} ref={scrollContainerRef}>
//             <Row className="mt-3 mb-3">
//                 <Col md={{ span: 6, offset: 3 }}>
//                     <Form inline className="d-flex">
//                         <Form.Control 
//                             type="text" 
//                             placeholder="Nhập từ khóa..." 
//                             onChange={handleTextChange} 
//                             value={q} 
//                             style={{ marginRight: '10px' }}
//                             className="mr-sm-2 flex-grow-1" 
//                         />
//                         <Button onClick={() => handleSearch(q)} variant="primary">
//                             Tìm kiếm
//                         </Button>
//                     </Form>
//                 </Col>
//             </Row>
//             {baiViets.length === 0 ? (
//                 <Row className="justify-content-center">
//                     <Col md="auto">
//                         <p>Không có bài viết nào</p>
//                     </Col>
//                 </Row>
//             ) : (
//                 baiViets.map(b => (
//                     <Row key={b.id} className="justify-content-center">
//                         <Col md={8}>
//                             <BaiViet baiviet={b} />
//                         </Col>
//                     </Row>
//                 ))
//             )}
//             {loading && page > 1 && (
//                 <Row className="justify-content-center">
//                     <Col md="auto">
//                         <Spinner animation="border" />
//                         <span className="ml-2">Đang tải...</span>
//                     </Col>
//                 </Row>
//             )}
//         </Container>
//     );
// };

// export default BanTin;


// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
// import BaiViet from './BaiViet';
// import Footer from './Footer';
// import { isCloseToBottom } from '../Utils/Tobottom';
// import APIs, { authAPI, endpoints } from '../../configs/APIs';
// import debounce from 'lodash.debounce';
// import './Styles.css'; // Ensure to import the CSS file

// const BanTin = () => {
//     const [q, setQ] = useState('');
//     const [baiViets, setBaiViets] = useState([]);
//     const [page, setPage] = useState(1);
//     const [loading, setLoading] = useState(false);
//     const scrollContainerRef = useRef(null);

//     const loadBaiViets = useCallback(async () => {
//         console.log("Page", page);
//         try {
//             setLoading(true);
//             let baiviets = await authAPI().get(`${endpoints['bai_viet']}?page=${page}`);

//             if (baiviets.data.next === null) {
//                 setPage(0);
//             }
//             if (page === 1) {
//                 setBaiViets(baiviets.data.results);
//             } else {
//                 setBaiViets(current => [...current, ...baiviets.data.results]);
//             }

//         } catch (ex) {
//             console.log("Lỗi", ex);
//         } finally {
//             setLoading(false);
//         }
//     }, [page]);

//     const handleSearch = useCallback(
//         debounce(async (query) => {
//             setPage(1);
//             try {
//                 setLoading(true);
//                 let baiviets = await authAPI().get(`${endpoints['bai_viet']}?q=${query}`);
//                 console.log(baiviets.data);
//                 if (baiviets.data.count === 0) {
//                     setBaiViets([]);
//                 } else {
//                     setBaiViets(baiviets.data.results);
//                 }
//             } catch (ex) {
//                 console.log("Lỗi", ex);
//             } finally {
//                 setLoading(false);
//             }
//         }, 300),
//         []
//     );

//     useEffect(() => {
//         handleSearch(q);
//     }, [q, handleSearch]);

//     useEffect(() => {
//         loadBaiViets();
//     }, [loadBaiViets, page]);

//     const loadMore = () => {
//         if (!loading && page > 0 && scrollContainerRef.current && isCloseToBottom(scrollContainerRef.current)) {
//             setPage(page + 1);
//         }
//     };

//     const handleTextChange = (event) => {
//         setQ(event.target.value);
//     };

//     // Generate random colors
//     const getRandomColor = () => {
//         const letters = '0123456789ABCDEF';
//         let color = '#';
//         for (let i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     };

//     return (
//         <div id="root">
//             <Container onScroll={loadMore} ref={scrollContainerRef} className="background-image">
//                 <div className="background-overlay"></div>
//                 <div className="content">
//                     <Row className="mt-3 mb-3">
//                         <Col md={{ span: 8, offset: 2 }}>
//                             <Form className="search-form">
//                                 <Form.Control 
//                                     type="text" 
//                                     placeholder="Nhập từ khóa..." 
//                                     onChange={handleTextChange} 
//                                     value={q} 
//                                     className="search-input" 
//                                 />
//                                 <Button onClick={() => handleSearch(q)} className="search-button">
//                                     Tìm kiếm
//                                 </Button>
//                             </Form>
//                         </Col>
//                     </Row>
//                     {baiViets.length === 0 ? (
//                         <Row className="justify-content-center">
//                             <Col md="auto">
//                                 <p>Không có bài viết nào</p>
//                             </Col>
//                         </Row>
//                     ) : (
//                         baiViets.map((b, index) => (
//                             <Row key={b.id} className="justify-content-center">
//                                 <Col md={8}>
//                                     <BaiViet 
//                                         baiviet={b} 
//                                         style={{ backgroundColor: getRandomColor() }} 
//                                     />
//                                 </Col>
//                             </Row>
//                         ))
//                     )}
//                     {loading && page > 1 && (
//                         <Row className="justify-content-center">
//                             <Col md="auto">
//                                 <Spinner animation="border" />
//                                 <span className="ml-2">Đang tải...</span>
//                             </Col>
//                         </Row>
//                     )}
//                 </div>
//             </Container>
//             <Footer />
//         </div>
//     );
// };

// export default BanTin;


// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
// import BaiViet from './BaiViet';
// import Footer from './Footer';
// import { isCloseToBottom } from '../Utils/Tobottom';
// import APIs, { authAPI, endpoints } from '../../configs/APIs';
// import debounce from 'lodash.debounce';
// import './BanTin.css'; // Ensure to import the CSS file

// const BanTin = () => {
//     const [q, setQ] = useState('');
//     const [baiViets, setBaiViets] = useState([]);
//     const [page, setPage] = useState(1);
//     const [loading, setLoading] = useState(false);
//     const scrollContainerRef = useRef(null);

//     const loadBaiViets = useCallback(async () => {
//         console.log("Page", page);
//         try {
//             setLoading(true);
//             let baiviets = await authAPI().get(`${endpoints['bai_viet']}?page=${page}`);

//             if (baiviets.data.next === null) {
//                 setPage(0);
//             }
//             if (page === 1) {
//                 setBaiViets(baiviets.data.results);
//             } else {
//                 setBaiViets(current => [...current, ...baiviets.data.results]);
//             }

//         } catch (ex) {
//             console.log("Lỗi", ex);
//         } finally {
//             setLoading(false);
//         }
//     }, [page]);

//     const handleSearch = useCallback(
//         debounce(async (query) => {
//             setPage(1);
//             try {
//                 setLoading(true);
//                 let baiviets = await authAPI().get(`${endpoints['bai_viet']}?q=${query}`);
//                 console.log(baiviets.data);
//                 if (baiviets.data.count === 0) {
//                     setBaiViets([]);
//                 } else {
//                     setBaiViets(baiviets.data.results);
//                 }
//             } catch (ex) {
//                 console.log("Lỗi", ex);
//             } finally {
//                 setLoading(false);
//             }
//         }, 300),
//         []
//     );

//     useEffect(() => {
//         handleSearch(q);
//     }, [q, handleSearch]);

//     useEffect(() => {
//         loadBaiViets();
//     }, [loadBaiViets, page]);

//     const loadMore = () => {
//         if (!loading && page > 0 && scrollContainerRef.current && isCloseToBottom(scrollContainerRef.current)) {
//             setPage(page + 1);
//         }
//     };

//     const handleTextChange = (event) => {
//         setQ(event.target.value);
//     };

//     // Generate random colors
//     const getRandomColor = () => {
//         const letters = '0123456789ABCDEF';
//         let color = '#';
//         for (let i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     };

//     return (
//         <div id="root">
//             <Container onScroll={loadMore} ref={scrollContainerRef} className="background-image">
//                 <div className="background-overlay"></div>
//                 <div className="content">
//                     <Row className="mt-3 mb-3">
//                         <Col md={{ span: 8, offset: 2 }}>
//                             <Form className="search-form">
//                                 <Form.Control 
//                                     type="text" 
//                                     placeholder="Nhập từ khóa..." 
//                                     onChange={handleTextChange} 
//                                     value={q} 
//                                     className="search-input" 
//                                 />
//                                 <Button onClick={() => handleSearch(q)} className="search-button">
//                                     Tìm kiếm
//                                 </Button>
//                             </Form>
//                         </Col>
//                     </Row>
//                     {baiViets.length === 0 ? (
//                         <Row className="justify-content-center">
//                             <Col md="auto">
//                                 <p>Không có bài viết nào</p>
//                             </Col>
//                         </Row>
//                     ) : (
//                         baiViets.map((b, index) => (
//                             <Row key={b.id} className="justify-content-center">
//                                 <Col md={8}>
//                                     <BaiViet 
//                                         baiviet={b} 
//                                         style={{ backgroundColor: getRandomColor() }} 
//                                     />
//                                 </Col>
//                             </Row>
//                         ))
//                     )}
//                     {loading && page > 1 && (
//                         <Row className="justify-content-center">
//                             <Col md="auto">
//                                 <Spinner animation="border" />
//                                 <span className="ml-2">Đang tải...</span>
//                             </Col>
//                         </Row>
//                     )}
//                 </div>
//             </Container>
//             <Footer />
//         </div>
//     );
// };

// export default BanTin;

// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
// import BaiViet from './BaiViet';
// import Footer from './Footer';
// import Sidebar from './Sidebar';
// import { isCloseToBottom } from '../Utils/Tobottom';
// import APIs, { authAPI, endpoints } from '../../configs/APIs';
// import debounce from 'lodash.debounce';
// import './Styles.css'; 

// const BanTin = () => {
//     const [q, setQ] = useState('');
//     const [baiViets, setBaiViets] = useState([]);
//     const [page, setPage] = useState(1);
//     const [loading, setLoading] = useState(false);
//     const scrollContainerRef = useRef(null);

//     const loadBaiViets = useCallback(async () => {
//         console.log("Page", page);
//         try {
//             setLoading(true);
//             let baiviets = await authAPI().get(`${endpoints['bai_viet']}?page=${page}`);

//             if (baiviets.data.next === null) {
//                 setPage(0);
//             }
//             if (page === 1) {
//                 setBaiViets(baiviets.data.results);
//             } else {
//                 setBaiViets(current => [...current, ...baiviets.data.results]);
//             }

//         } catch (ex) {
//             console.log("Lỗi", ex);
//         } finally {
//             setLoading(false);
//         }
//     }, [page]);

//     const handleSearch = useCallback(
//         debounce(async (query) => {
//             setPage(1);
//             try {
//                 setLoading(true);
//                 let baiviets = await authAPI().get(`${endpoints['bai_viet']}?q=${query}`);
//                 console.log(baiviets.data);
//                 if (baiviets.data.count === 0) {
//                     setBaiViets([]);
//                 } else {
//                     setBaiViets(baiviets.data.results);
//                 }
//             } catch (ex) {
//                 console.log("Lỗi", ex);
//             } finally {
//                 setLoading(false);
//             }
//         }, 300),
//         []
//     );

//     useEffect(() => {
//         handleSearch(q);
//     }, [q, handleSearch]);

//     useEffect(() => {
//         loadBaiViets();
//     }, [loadBaiViets, page]);

//     const loadMore = () => {
//         if (!loading && page > 0 && scrollContainerRef.current && isCloseToBottom(scrollContainerRef.current)) {
//             setPage(page + 1);
//         }
//     };

//     const handleTextChange = (event) => {
//         setQ(event.target.value);
//     };

//     // Generate random colors
//     const getRandomColor = () => {
//         const letters = '0123456789ABCDEF';
//         let color = '#';
//         for (let i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     };

//     return (
//         <div id="root">
//             <div className="background-image">
//                 <div className="background-overlay"></div>
//                 <Container onScroll={loadMore} ref={scrollContainerRef} className="content-container">
//                     <header className="menu">
//                         <Form className="search-form">
//                             <Form.Control 
//                                 type="text" 
//                                 placeholder="Nhập từ khóa..." 
//                                 onChange={handleTextChange} 
//                                 value={q} 
//                                 className="search-input" 
//                             />
//                             <Button onClick={() => handleSearch(q)} className="search-button">
//                                 Tìm kiếm
//                             </Button>
//                         </Form>
//                     </header>
//                     <Row className="mt-0 mb-0">
//                         <Col md={8} sm={12} xs={12} className="content-col1">
//                             <Row className="mt-0">
//                                 {baiViets.length === 0 ? (
//                                     <Col className="text-center">
//                                         <p>Không có bài viết nào</p>
//                                     </Col>
//                                 ) : (
//                                     baiViets.map((b) => (
//                                         <Col key={b.id} md={12} className="mb-2">
//                                             <BaiViet 
//                                                 baiviet={b} 
//                                                 className="bai-viet" 
//                                                 style={{ backgroundColor: getRandomColor() }} 
//                                             />
//                                         </Col>
//                                     ))
//                                 )}
//                                 {loading && page > 1 && (
//                                     <Col className="text-center">
//                                         <Spinner animation="border" />
//                                         <span className="ml-2">Đang tải...</span>
//                                     </Col>
//                                 )}
//                             </Row>
//                         </Col>
//                         <Sidebar />
//                     </Row>

//                 </Container>
//                 <Footer />
//             </div>
//         </div>
//     );
// };

// export default BanTin;


import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import BaiViet from './BaiViet';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { isCloseToBottom } from '../Utils/Tobottom';
import APIs, { authAPI, endpoints } from '../../configs/APIs';
import debounce from 'lodash.debounce';
import './Styles.css'; 

const BanTin = () => {
    const [q, setQ] = useState('');
    const [baiViets, setBaiViets] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const scrollContainerRef = useRef(null);

    const loadBaiViets = useCallback(async () => {
        console.log("Page", page);
        try {
            setLoading(true);
            let baiviets = await authAPI().get(`${endpoints['bai_viet']}?page=${page}`);

            if (baiviets.data.next === null) {
                setPage(0);
            }
            if (page === 1) {
                setBaiViets(baiviets.data.results);
            } else {
                setBaiViets(current => [...current, ...baiviets.data.results]);
            }

        } catch (ex) {
            console.log("Lỗi", ex);
        } finally {
            setLoading(false);
        }
    }, [page]);

    const handleSearch = useCallback(
        debounce(async (query) => {
            setPage(1);
            try {
                setLoading(true);
                let baiviets = await authAPI().get(`${endpoints['bai_viet']}?q=${query}`);
                console.log(baiviets.data);
                if (baiviets.data.count === 0) {
                    setBaiViets([]);
                } else {
                    setBaiViets(baiviets.data.results);
                }
            } catch (ex) {
                console.log("Lỗi", ex);
            } finally {
                setLoading(false);
            }
        }, 300),
        []
    );

    useEffect(() => {
        handleSearch(q);
    }, [q, handleSearch]);

    useEffect(() => {
        loadBaiViets();
    }, [loadBaiViets, page]);

    const loadMore = () => {
        if (!loading && page > 0 && scrollContainerRef.current && isCloseToBottom(scrollContainerRef.current)) {
            setPage(page + 1);
        }
    };

    const handleTextChange = (event) => {
        setQ(event.target.value);
    };

    // Generate random colors
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <div id="root">
            <div className="background-image">
                <div className="background-overlay"></div>
                <Container onScroll={loadMore} ref={scrollContainerRef} className="content-container">
                    <header className="menu">
                        <Form className="search-form">
                            <Form.Control 
                                type="text" 
                                placeholder="Nhập từ khóa..." 
                                onChange={handleTextChange} 
                                value={q} 
                                className="search-input" 
                            />
                            <Button onClick={() => handleSearch(q)} className="search-button">
                                Tìm kiếm
                            </Button>
                        </Form>
                    </header>
                    <Row className="mt-3 mb-6 ">
                        <Col md={8} sm={12} xs={12} className="content-col">
                            <Row className="mt-4 mb-4">
                                {baiViets.length === 0 ? (
                                    <Col className="text-center">
                                        <p>Không có bài viết nào</p>
                                    </Col>
                                ) : (
                                    baiViets.map((b) => (
                                        <Col key={b.id} md={12} className="bai-viet">
                                            <BaiViet 
                                                baiviet={b} 
                                                className="card-body1" 
                                                style={{ backgroundColor: getRandomColor() }} 
                                            />
                                        </Col>
                                    ))
                                )}
                                {loading && page > 1 && (
                                    <Col className="text-center">
                                        <Spinner animation="border" />
                                        <span className="ml-2">Đang tải...</span>
                                    </Col>
                                )}
                            </Row>
                        </Col>
                        <Sidebar />
                    </Row>
                </Container>
                <Footer />
            </div>
        </div>
    );
};

export default BanTin;
