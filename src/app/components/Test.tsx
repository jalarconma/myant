import styles from './Test.module.scss';

function Test() {
  const ctyles = styles['c-test'];
  return (
    <div className={`${ctyles} flex items-center`}>
      <span>This is just a message</span>
      <button type="button" className="ml-6 p-12 bg-gray text-white">click me!</button>
    </div>
  )
}

export default Test;