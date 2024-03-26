const Gender = ({ onCheckboxChange, selectedGender } : {onCheckboxChange : Function , selectedGender : String}) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label cursor-pointer gap-2 ${selectedGender === "male" ? 'selected' : ''}`}>
          <span className="label-text text-white">Male</span>
          <input type="checkbox" className="checkbox border-slate-900" checked={selectedGender === "male"} onChange={() => onCheckboxChange("male")} />
        </label>
      </div>
      <div className="form-control">
        <label className={`label cursor-pointer gap-2 ${selectedGender === "female" ? 'selected' : ''}`}>
          <span className="label-text text-white">Female</span>
          <input type="checkbox" className="checkbox border-slate-900" checked={selectedGender === "female"} onChange={() => onCheckboxChange("female")} />
        </label>
      </div>
    </div>
  );
};

export default Gender;
