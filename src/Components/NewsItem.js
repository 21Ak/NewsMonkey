import React from 'react'

const NewsItem=(props)=> {

    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
            <span class="badge rounded-pill bg-danger" style={{left:'50%', zIndex:'1'}}>{source}</span>
          </div>
            <img src={!imageUrl?"https://images.tijd.be/view?iid=dc:66572028&context=ONLINE&ratio=16/9&width=640&u=1464200700000":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text text-danger"><small>By {!author? "Unknown": author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )

}

export default NewsItem