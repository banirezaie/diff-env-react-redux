import React, { useState } from "react";

function CoursesPage() {
  const [course, setCourse] = useState({
    title: "",
  });

  function handleChange(e) {
    const _course = { ...course, title: e.target.value };
    setCourse(_course);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(course.title);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add course</h3>
      <input type='text' onChange={handleChange} value={course.title} />
      <input type='submit' value='Save' />
    </form>
  );
}

export default CoursesPage;
