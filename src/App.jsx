import { useState } from 'react'
import './App.css'

const initialFormData = {
  title: '',
  image: '',
  content: '',
  category: '',
  tags: [],
  published: false,
}

function App() {
  const [formData, setFormData] = useState(initialFormData)
  const [articles, setArticles] = useState([])

  function handleTagChange(e) {
    const { value, checked } = e.target
    setFormData({
      ...formData,
      tags: checked ? [...articles.tags, value] : articles.tags.filter(tag => tag != value)
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setArticles([...articles, formData])
    setFormData(initialFormData)
  }

  function handleTrashTaskClick(e) {
    const trash = Number(e.target.getAttribute('data-index'))

    const newData = articles.filter((task, index) => index != trash)

    setArticles(newData)
  }

  return (
    <>
      <div className='container'>
        <div className='d-flex align-items-center justify-content-between py-4'>
          <h1>React Form Multifield</h1>
          <form>
            <div className='mb-3'>
              <input type="search" className='form-control' name='searchText' id='searchText' aria-describedby='searchHelper' placeholder=' 🔍 Search...' /* value={searchText} onchange={e => setSearchText(e.target.value)} */ />
            </div>
          </form>
        </div>


        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                aria-describedby="tatlehelper"
                placeholder="title blog"
                required
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
              />
              <small id="titlehelper" className="form-text text-muted"></small>
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">Image</label>
              <input
                type="text"
                className="form-control"
                name="image"
                id="image"
                aria-describedby="imagehelper"
                placeholder="/images/1.jpg"
                value={formData.image}
                onChange={e => setFormData({ ...formData, image: e.target.value })}
              />
              <small id="imagehelper" className="form-text text-muted"></small>
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">Category</label>
              <select className="form-select" aria-label="Default select example" name='category' value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} >

                {/* <option selected>Open this category</option> */}
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <small id="categoryhelper" className="form-text text-muted">Category</small>
            </div>

            <div className="mb-3">
              <label htmlFor="content" className="form-label">Content</label>

              <textarea
                className="form-control"
                name="content"
                id="content"
                rows="3"
                value={formData.content}
                onChange={e => setFormData({ ...formData, content: e.target.value })}
              ></textarea>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" value={formData.tags} onChange={handleTagChange} />
              <label className="form-check-label" htmlFor="radioDefault1">
                Default radio
              </label>
            </div>
            <div className="form-check mb-4">
              <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked value={formData.tags} onChange={handleTagChange} />
              <label className="form-check-label" htmlFor="radioDefault2">
                Default checked radio
              </label>
            </div>


            <div className="form-check mb-3">
              <input
                id="published"
                name='published'
                type="checkbox"
                className="form-check-input"
                value={formData.published}
                onChange={e => setFormData({ ...formData, checkbox: e.target.checked })}

              />
              <label className="form-check-label" htmlFor=""> Published </label>
            </div>


            <button
              type="submit"
              className="btn btn-secondary"
            >
              Submit
            </button>

          </div>
        </form>

        <ul className='list-group'>
          {articles.map((task, index) => <li key={index} className='list-group-item d-flex justify-content-between my-4'>

            
            {/* {task.category}
            {task.tags}
            {task.published} */}

            <div className="card">
              <img src={task.image} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text">{task.content}</p>
                <p className='card-text'>{task.published}</p>
                <button onClick={handleTrashTaskClick} data-index={index} className='btn btn-danger'><i className="bi bi-trash"></i></button>
              </div>
            </div>
          </li>)}
        </ul>
      </div>
    </>
  )
}

export default App
