

//show details when carousel thumbnail is clicked
function GetSelectedProductDetailsFadeIn(categoryPageGroupId) {
    console.log("fadein=", categoryPageGroupId);

    //showLoading();

    $(".pp_thumbnail1").fadeOut(0, function () {
        GetSelectedProductDetails(categoryPageGroupId);
    })
    .fadeIn(600);

}

var platinumProductSubType = 0;


function GetSelectedProductDetails(categoryPageGroupId) {
    $('#create_now').attr('data-details_loaded', 'false');

    $.ajax({
        type: 'GET',
        url: '/Photobook/GetSelectedProductDetails?categoryPageGroupId=' + categoryPageGroupId + '&preselectedRefId=' + _preselectedRefId + '&scp=' + _showCouponProduct,
        dataType: 'json',
        beforeSend: function () {
            createNowBlockUi();
        },
        complete: function () {
            createNowUnBlockUi();
        }
    }).done(function (data) {
        console.log("data.result=", data.result);

        var html = "";
        if (data.result) {
            var item = data.result[0];
            
            SetCommonContents(item);

            //populate sizes drop down
            var selectedItem = $("#select_sizes option:first").val();
            var sizeHtml = '';
            $.each(item.Sizes, function (j, size) {
                sizeHtml += "<option value=\"" + size.Key + "\">" + size.Size + "</option>"
                if (size.Selected) selectedItem = size.Key;

            });
            console.log("sizeHtml=", sizeHtml);
            $("#select_sizes").html(sizeHtml);
            
            platinumProductSubType = item.PlatinumProductSubType;
            
            //$("#select_sizes").trigger('change');
            $("#select_sizes").val(selectedItem).change();
            $('#create_now').attr('data-details_loaded', 'true');
        }

    }).error(function (jqXHR, textStatus, errorThrown) {
        console.log("respText= " + jqXHR.responseText + ", status= " + textStatus + ", error= " + errorThrown);
    });


}


//change events
$(function () {
    //attach event to sizes drop down, when clicked populate pages drop down
    console.log("GetPages ==> _showCouponProduct ===> " + _showCouponProduct.toString());
    $('#create_now').attr('data-pages_loaded', 'false');

    $('#select_sizes').change(function () {
        //showLoading();

        $.ajax({
            type: 'GET',
            url: '/Photobook/GetPages?platinumProductSubType=' + platinumProductSubType + '&size=' + $('#select_sizes').val() + '&preselectedRefId=' + _preselectedRefId + '&scp=' + _showCouponProduct,
            dataType: 'json',
            beforeSend: function () {
                createNowBlockUi();
            },
            complete: function () {
                createNowUnBlockUi();
            }
        }).done(function (data) {

            if (data.result.length > 0) {
                console.log("GetPages=", data.result);
                console.log("GetPages success - subtype=" + platinumProductSubType + ", size=" + $('#select_sizes').val());

                var pagesHtml = '';
                var selectedItem = $("#select_pages option:first").val();
                $.each(data.result, function (i, page) {
                    //store the price in the id attribute. DisplayPrice | DiscountedPrice
                    pagesHtml += "<option id=\"" + page.DisplayPrice + "|" + page.DiscountedPrice + "\" value='" + page.ProductRefId + "'>" + page.Pages + "</option>";

                    if (page.Selected) selectedItem = page.ProductRefId;

                });
                console.log("pages html=", pagesHtml);

                $("#select_pages").html(pagesHtml);
                                
                $("#select_pages").val(selectedItem).change();

                $('#create_now').attr('data-pages_loaded', 'true');
            }
            else
            {
                console.log("GetPages error - subtype=" + platinumProductSubType + ", size=" + $('#select_sizes').val());
            }

        }).error(function (jqXHR, textStatus, errorThrown) {
            console.log("respText= " + jqXHR.responseText + ", status= " + textStatus + ", error= " + errorThrown);
        });

        if (_showCouponProduct === 'True') {
            $("#create_now").hide();
            var buyNowUrl = "/checkout/cart/?productRefId=" + $("#select_pages").val();
            $("#buy_coupon_product").attr("href", buyNowUrl);
            $("#buy_coupon_product").show();
        }
        else
        {
            $("#buy_coupon_product").hide();
            $("#create_now").show();
        }

    }); //.change();

    //when pages changes, update the price
    $('#select_pages').change(function () {
        //in landing-page.common.js
        SetPrices($(this).children(":selected").attr("id"));
        GetColours();

        if (_showCouponProduct === 'True') {
            $("#create_now").hide();
            var buyNowUrl = "/checkout/cart/?productRefId=" + $("#select_pages").val();
            $("#buy_coupon_product").attr("href", buyNowUrl);
            $("#buy_coupon_product").show();
        }
        else {
            $("#buy_coupon_product").hide();
            $("#create_now").show();
        }
    });

    $('#pr-snippet-read-link-photobook').click(function () {
        $('#review_tab').trigger('click');
        location.href = "#ReviewHeader";
    });


});

//on submit redirect to - /Upselling.aspx?productId=
function CreateNow() {

    var productRefId = $("#select_pages").val();
    if (productRefId == "undefine" || productRefId == "NaN" || productRefId == "null")
        productRefId = "";

    //var redirectUrl = '/Upselling?productRefId=' + $("#select_pages").val();
    var redirectUrl = '/Upselling?productRefId=' + productRefId;


    if ($("#colour_wrap").is(":visible"))
    {
        redirectUrl += '&colour=' + $('#select_colours').data('ddslick').selectedData.value;
    }
    
    console.log("Redirecting to...", redirectUrl);

    var productDetailsLoaded = $('#create_now').attr('data-details_loaded');
    var pagesLoaded = $('#create_now').attr('data-pages_loaded');

    console.log('productDetailsLoaded: ', productDetailsLoaded, 'pagesLoaded: ', pagesLoaded);

    if (productDetailsLoaded === 'true' && pagesLoaded === 'true')
        window.location.href = redirectUrl;
}

function GetColours()
{
    $.ajax({
        type: 'GET',
        url: '/Photobook/GetColours?productRefId=' + $('#select_pages').val(), //the selected page drop down value is the product id
        dataType: 'json',
        beforeSend: function () {
            createNowBlockUi();
        },
        complete: function () {
            createNowUnBlockUi();
        }
    }).done(function (data) {

        if (data.result.length > 1) {
            console.log("GetColours=", data.result);

            var coloursHtml = '';

            $.each(data.result, function (i, colour) {
                coloursHtml += "<option id=\"" + colour.ColourRef + "\" value='" + colour.ColourRef + "' data-imagesrc='" + colour.ImageSrc + "'>" + colour.DisplayName + "</option>";
            });
            console.log("coloursHtml=", coloursHtml);

            $("#select_colours").html(coloursHtml);

            $('#select_colours').ddslick('destroy');
            $('#select_colours').ddslick();


            //$("#select_colours")[0].selectedIndex = 0;
            $("#colour_wrap").show();
        }
        else {
            $("#colour_wrap").hide();
            console.log("GetColours:No more than one colour found for refId=" + $('#select_pages').val());
        }
    }).error(function (jqXHR, textStatus, errorThrown) {
        $("#colour_wrap").hide();
        console.log("respText= " + jqXHR.responseText + ", status= " + textStatus + ", error= " + errorThrown);
    });

}

function createNowBlockUi() {
    $('#create_now').block({ centerX: true, centerY: true, message: '<img src="/Themes/images/loading.gif" style="height: 25px; width: 25px;" />' });
};

function createNowUnBlockUi() {
    $('#create_now').unblock();
};

