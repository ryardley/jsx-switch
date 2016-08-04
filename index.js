
module.exports = {
  Default: function (props) {
    return props.children;
  },

  Switch: function (props) => {
    function notDefault (c) {
      return c.type !== Default;
    }

    var isDefaultCase (c) {
      return c.type === Default;
    }

    var childrenNotDefault = props.children.filter(notDefault);
    var childDefault = props.children.filter(isDefaultCase)[0];

    var reduceExprs = function (all, child) {
      return all || child.props.expr;
    }

    var showDefaultCase = !childrenNotDefault.reduce(reduceExprs, false);

    return <span>{showDefaultCase && childDefault || childrenNotDefault}</span>
  },

  Case: function (props) {
    return props.expr && props.children;
  }
}
