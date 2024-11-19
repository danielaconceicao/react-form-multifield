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

  function handleFormField(e){
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setFormData({
      ...formData,
      [e.target.name]: value
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
                onChange={handleFormField}
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
                onChange={handleFormField}
              />
              <small id="imagehelper" className="form-text text-muted"></small>
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">Category</label>
              <select className="form-select" aria-label="Default select example" name='category' value={formData.category} onChange={handleFormField} >

                <option value>Open this category</option>
                <option value="CSS">CSS</option>
                <option value="HTML">HTML</option>
                <option value="JAVASCRIPT">JAVASCRIPT</option>
                <option value="PYTHON">PYTHON</option>
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
                onChange={handleFormField}
              ></textarea>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="radioDefault" id="radioDefault1" /* value={formData.tags} onChange={} */ />
              <label className="form-check-label" htmlFor="radioDefault1">
                Default radio
              </label>
            </div>
            <div className="form-check mb-4">
              <input className="form-check-input" type="checkbox" name="radioDefault" id="radioDefault2" /* value={formData.tags} onChange={} */ />
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
                onChange={handleFormField}

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

            
            {/* 
            {task.tags}
             */}

            <div className="card">
              <img src={task.image} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text">Content: {task.content}</p>
                <p className="card-text">Category: {task.category}</p>
                <p className="card-text">Tags: {task.tags}</p>
                <p className='card-text'>Published: {task.published ? 'Publishable' : 'Unpublishable'}</p>
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
