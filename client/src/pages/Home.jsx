import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { deleteRobot, getAllRobots } from '../api/requests';
import banner from '../images/banner.webp';
import style from './home.module.css'
import Swal from 'sweetalert2'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Home = () => {
  const [robots, setRobots] = useState([]);
  useEffect(() => {
    getAllRobots().then((res) => {
      setRobots(res.data);
    })
  }, []);
  const [search, setSearch] = useState('')
  const sortData = () => {
    const sortedData = [...robots].sort((a, b) => {
      if (sort) {
        return a.name.localeCompare(b.name)
      }
      else {
        return b.name.localeCompare(a.name)
      }
    });
    setRobots(sortedData);
    setSort(!sort)
  };


  const [sort, setSort] = useState(true)


  return (
    <>
      <main>
        <section>
          <div className='container'>
            <div className={style.herorow}>
              <div className={style.leftwrite}>
                <h1>Improved <br></br> Production level <br></br> with Robotics</h1>
                <p>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</p>
                <button>VIEW DETAILS</button>
              </div>
              <div className='rightimg'>
                <img src={banner} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={style.crudwrite}>
            <h1>Featured Robotics Products to Show</h1>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
          <div className='container'>
            <div className={style.crudrow}>

              {robots && robots.filter((item) => {
              return search.toLocaleLowerCase() === '' ? item : item.name.toLowerCase().includes(search)}).map((robot) => {
                return <div key={robot._id} className={style.crudcard}>
                  <img src={robot.imageURL} alt="" />
                  <h4>{robot.name}</h4>
                  <p>{robot.desc}</p>
                  <button
                    onClick={() => {
                      Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          deleteRobot(robot._id).then(() => {
                            Swal.fire(
                              'Deleted!',
                              'Your file has been deleted.',
                              'success'
                            )
                          })
                          setRobots(
                            robots.filter((x) => x._id !== robot._id)
                          )
                        }
                      })
                    }}>Delete</button>
                </div>
              })}

            </div>
          </div>
        </section>
        <section className={style.cardsimage}>
          <div className={style.crudwrites}>
            <h1>Some Features that Made us Unique</h1>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
          <div className='container'>
            <div className={style.row}>
              <div className={style.cards}>
                <div>
                  <PersonOutlineOutlinedIcon />
                  <h4>
                    Expert Technicians
                  </h4>
                </div>
                <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
              </div>
              <div className={style.cards}>
                <div>
                  <PersonOutlineOutlinedIcon />
                  <h4>
                    Expert Technicians
                  </h4>
                </div>
                <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
              </div>
              <div className={style.cards}>
                <div>
                  <PersonOutlineOutlinedIcon />
                  <h4>
                    Expert Technicians
                  </h4>
                </div>
                <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
              </div>
              <div className={style.cards}>
                <div>
                  <PersonOutlineOutlinedIcon />
                  <h4>
                    Expert Technicians
                  </h4>
                </div>
                <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
              </div>
              <div className={style.cards}>
                <div>
                  <PersonOutlineOutlinedIcon />
                  <h4>
                    Expert Technicians
                  </h4>
                </div>
                <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
              </div>
              <div className={style.cards}>
                <div>
                  <PersonOutlineOutlinedIcon />
                  <h4>
                    Expert Technicians
                  </h4>
                </div>
                <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
