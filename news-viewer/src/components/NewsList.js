import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (amx-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //async를 사용하는 함수를 따로 선언(useEffect는 직접적으로 async를 사용불가능)
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    'https://newsapi.org/v2/top-headlines?country=kr&apiKey=b615e45da4b44b1391185f124a2f6722',
                );
                setArticles(response.data.articles);
            } catch(e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    //대기 중일 때
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }
    //아직 articles 값이 설정되지 않았을 때
    if (!articles) {
        return null;
    }

    //articles 값이 유효할 때
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;