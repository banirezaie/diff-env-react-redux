import React, { useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

function CoursesPage(props) {
  const [course, setCourse] = useState({
    title: "",
  });

  function handleChange(e) {
    const _course = { ...course, title: e.target.value };
    setCourse(_course);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.actions.createCourse(course);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add course</h3>
      <input type='text' onChange={handleChange} value={course.title} />
      <input type='submit' value='Save' />
      {props.courses.map((course, i) => {
        return <div key={i}>{course.title}</div>;
      })}
    </form>
  );
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
