import ArticleForm from '../../components/ArticleForm';

const CreateArticle = () => {
  const initialArticle = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };

  return (
    <ArticleForm
      initialArticle={initialArticle}
      url="http://localhost/api/articles"
      method="POST"
    />
  );
};

export default CreateArticle;
