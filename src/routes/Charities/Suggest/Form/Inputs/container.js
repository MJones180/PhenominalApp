export default Component => (
  () => Component(
    // Function to easily inject all of the necessary props
    (name, label, optional) => ({
      label,
      name,
      optional,
    })
  )
);
