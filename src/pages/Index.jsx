import React, {useEffect} from 'react'
import Content from '../components/Content'
import { IndexContent } from '../data/ContentData'
import {useLineNumber} from "../context/LineNumberContext";
import {useWindowMenu} from "../context/WindowMenuContext";

const Index = () => {
  const { setLineNumber } = useLineNumber();
  const { setCurrentPage } = useWindowMenu();

  useEffect(() => {
    setLineNumber("10");
    setCurrentPage("Index.jsx")
  }, [setLineNumber, setCurrentPage]);

  return (
    <Content sentences={IndexContent} />
  )
}

export default Index