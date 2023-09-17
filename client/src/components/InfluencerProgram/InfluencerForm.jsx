import { useReducer } from "react";

export default function InfluencerForm() {
  const fieldText = "w-64 text-xl bg-slate-50 text-black p-1 rounded";
  const fieldEl = "p-3";
  const fieldLabel = "py-3";

  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      firstName: "",
      lastName: "",
      emailAddress: "",
      platformUsername: "",
      primaryCategoryOfContent: "",
      totalFollowers: "",
      streamingChannel: "",
      twitter: "",
    }
  );

  const handleInfluencerFormSubmit = (e) => {
    e.preventDefault();
    // check if all fields are entered
    for (const key in state) {
      if (state[key] === "") {
        console.log("please fill in all forms");
        return;
      }
    }
    console.log(state);
  };

  return (
    <div className="flex items-center flex-col">
      <div className="form w-full flex flex-wrap justify-center">
        <div className={fieldEl}>
          <h1 className={fieldLabel}>First Name</h1>
          <input
            className={fieldText}
            type="text"
            value={state.firstName}
            onChange={(e) => dispatch({ firstName: e.target.value })}
          />
        </div>
        <div className={fieldEl}>
          <h1 className={fieldLabel}>Last Name</h1>
          <input
            className={fieldText}
            type="text"
            value={state.lastName}
            onChange={(e) => dispatch({ lastName: e.target.value })}
          />
        </div>
        <div className={fieldEl}>
          <h1 className={fieldLabel}>Email Address</h1>
          <input
            className={fieldText}
            type="text"
            value={state.emailAddress}
            onChange={(e) => dispatch({ emailAddress: e.target.value })}
          />
        </div>
        <div className={fieldEl}>
          <h1 className={fieldLabel}>Platform Username</h1>
          <input
            className={fieldText}
            type="text"
            value={state.platformUsername}
            onChange={(e) => dispatch({ platformUsername: e.target.value })}
          />
        </div>
        <div className={fieldEl}>
          <h1 className={fieldLabel}>Primary Category Of Content</h1>
          <input
            className={fieldText}
            type="text"
            value={state.primaryCategoryOfContent}
            onChange={(e) =>
              dispatch({ primaryCategoryOfContent: e.target.value })
            }
          />
        </div>
        <div className={fieldEl}>
          <h1 className={fieldLabel}>Total Followers</h1>
          <input
            className={fieldText}
            type="text"
            value={state.totalFollowers}
            onChange={(e) => dispatch({ totalFollowers: e.target.value })}
          />
        </div>
        <div className={fieldEl}>
          <h1 className={fieldLabel}>Streaming Channel</h1>
          <input
            className={fieldText}
            type="text"
            value={state.streamingChannel}
            onChange={(e) => dispatch({ streamingChannel: e.target.value })}
          />
        </div>
        <div className={fieldEl}>
          <h1 className={fieldLabel}>Twitter</h1>
          <input
            className={fieldText}
            type="text"
            value={state.twitter}
            onChange={(e) => dispatch({ twitter: e.target.value })}
          />
        </div>
        <div className="w-full flex md:justify-center justify-end p-3">
          <button
            className="bg-sky-500 px-6 py-3 rounded-md font-bold"
            onClick={handleInfluencerFormSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
